/*@jsxRuntime automatic @jsxImportSource react*/
import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "https://esm.sh/react@17.0.2/jsx-runtime?deno";
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? _jsx(MDXLayout, Object.assign({}, props, {
    children: _jsx(_createMdxContent, {})
  })) : _createMdxContent();
  function _createMdxContent() {
    const _components = Object.assign({
      h1: "h1",
      h3: "h3",
      p: "p",
      ol: "ol",
      li: "li",
      code: "code",
      em: "em"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.h1, {
        children: "Data Pipelines and Backpressure"
      }), "\n", _jsx(_components.h3, {
        children: "Rendezvous"
      }), "\n", _jsx(_components.p, {
        children: "I encountered backpressure the first time during my GSoC internship back in 2018. Goal was simple: process some CSV dumps and populate the database. Pretty standard ETL. My proposal, which I believed back then to be completely bullet proof, went something like this:"
      }), "\n", _jsx(_components.p, {
        children: "l had multiple CSV dumps with sizes ranging in 10s of GBs with millions of records. It was a given that a single file could not reside in the memory. Synchronous processing was out of question as well, it would have taken multiple weeks to finish complete processing. Monitoring would have been a nightmare. On top of that - the final deployment was supposed to be on a small remote Hetzner machine, which could crash any time (hardware crashes were pretty common due to issues like overheating and what not). So resilience was a big concern - how to pause, resume, recover from failures?"
      }), "\n", _jsx(_components.p, {
        children: "Another detail was that I was to use Node.JS. I had limited knowledge of the language back then."
      }), "\n", _jsx(_components.h3, {
        children: "Beginner's solution"
      }), "\n", _jsx(_components.p, {
        children: "There were three big issues which I could personally think of back then:"
      }), "\n", _jsxs(_components.ol, {
        children: ["\n", _jsx(_components.li, {
          children: "How to read large file without running out of memory?"
        }), "\n", _jsx(_components.li, {
          children: "How do I ensure I make most of processing power of the machine?"
        }), "\n", _jsx(_components.li, {
          children: "How to resume in case of failover?"
        }), "\n"]
      }), "\n", _jsx(_components.p, {
        children: "I decided to split the bigger files into smaller chunks of 500 MB each and process them individually. 500 MB was still big enough, so I decided to use NodeJS read streams to read it asynchronously without loading the entire file directly. I tested it out, it appeared to work great."
      }), "\n", _jsxs(_components.p, {
        children: ["To handle the third - while processing, I decided to record the states ", _jsx(_components.code, {
          children: "start"
        }), ", ", _jsx(_components.code, {
          children: "processing"
        }), " and ", _jsx(_components.code, {
          children: "done"
        }), " events for each row in a log file per process (per process meant easy synchorization and smaller log files). This was crucial because in case of a failover, the process can then read back from logs on startup and resume from the last record it had successfully processed (an basic alteration of simple recovery model). Additionally, I also logged errors in a separate file to be able to trace all application level error per record."]
      }), "\n", _jsx(_components.p, {
        children: "The second fear was, upon retrospection, overblown. As it did not involve any complex mathematical calculations but rather just small json serialization/deserialization and simple object transformation - CPU would never be a bottleneck. I/O was going to be a bottleneck - and indeed it turned out to be in a ugly way later."
      }), "\n", _jsx(_components.p, {
        children: "Anyhow, unware of above - I was overly worried about processing capacity management. I planned to spawn multiple processes which would target a distinct chunk. Each process's lifecycle will be to process a single chunk and only CPU+1 process will live at a time."
      }), "\n", _jsx(_components.p, {
        children: "As I mentioned earlier, I decided I would stream records asynchronously from these files, parse them, transform them and push them into a RabbitMQ queue. RabbitMQ was the resiliency piece here - in case of any failover, those records which have already been procssed would not need to be rerun. A consumer would then read from the RabbitMQ queue and insert it into the Postgres datastore at its own leisure. As RabbitMQ instance was a shared production resource, it was low risk to push couple of GBs there. I was smart enough back then to anticipate that writing to DB would be slower than reading and transforming the data, so this RabbitMQ plan felt pretty fool proof."
      }), "\n", _jsx(_components.h3, {
        children: "Implementation"
      }), "\n", _jsx(_components.p, {
        children: "I implemented the solution. It was when started testing it against large data sets when I found memory usage curve was just monotonically increasing. After a couple of minutes it hit the heap size for a NodeJS process and just crashed."
      }), "\n", _jsx(_components.p, {
        children: "Great, a memory leak. Saw tooths."
      }), "\n", _jsx(_components.p, {
        children: "Memory leak was frustrating. I was having a tough time back then - initially I was just interviewing along with my internship but then I joined Quizizz full time and had to juggle internship and full time SDE job side by side. I had to read/write code 12+ hours a day (not that I minded that too much)."
      }), "\n", _jsx(_components.p, {
        children: "As I mentioned earlier, I was very new to NodeJS back then. I googled the symptoms, and StackOverflow told me it had something to do with streams and \"backpressure\". After a few days of research and lot of reading I understood the issue. I was reading from disk via a stream, and then pushing it into another stream which was pushing messages to RabbitMQ. It turned out, under non-trivial load - stream which was inserting data into rabbit was way too slow compared to one reading from the file (same was happening for logging i.e. writing back to disk as well), leading to in-memory buffering which in turn caused memory usage to shoot up and also caused GC to go in overdrive till the process ran out of resources."
      }), "\n", _jsxs(_components.p, {
        children: ["I figured I had to fix the mismatch between file reads and Rabbit writes. It was absolutely clear I did not require \"real time\" processing. I simply had to process ", _jsx(_components.em, {
          children: "all"
        }), " the message - even the order didn't matter in this case."]
      }), "\n", _jsxs(_components.p, {
        children: ["So I ended up simply processing the messages in batches. I started reading records line by line - and for every read, I created an async action to push those lines to rabbit (a promise) immediately. But I kept those promises in a separate array. As soon as ", _jsx(_components.code, {
          children: "batchsize"
        }), " of records had been read - I paused the reader stream (there by stopping the stream from reading any more records) - and I waited for the pending promises (async actions) to finish. Once all promises were resolved (or rejected) I flushed the array (I call it batch). Rinse and repeat till the input stream fires stream close event."]
      }), "\n", _jsx(_components.p, {
        children: "I was never more thankful to God for closures!"
      }), "\n", _jsx(_components.h3, {
        children: "Distributed Systems"
      }), "\n", _jsx(_components.p, {
        children: "With distributed systems, backpressure in pipelines dealing with large volume data is almost inevitable. At some point in the pipeline, you'll most likely endup having a stage which is faster than the downstream."
      }), "\n", _jsx(_components.p, {
        children: "So how to deal with it? What I did sacrificed soft real time by batching and pausing streams. One can buffer some parts of streaming data to be processed later (usually using some queuing mechanism like Kafka etc). But a lot of systems might not be willing to give up on that requirement. In a distributed setting it might not even be possible. Even if it is possible, how do you actually implement such a mechanism?"
      }), "\n", _jsx(_components.p, {
        children: "It goes without saying that to handle backpressure either the producer in the pipeline slows down or we end up dropping messages to handle backpressure and maintain resource contraints for the system. Sometimes it is possible to slow down the producer (it is under our control) and sometimes it is not. For example, reading from a file is under our control, but user generated events are definitely not. In a distributed setting, this can be a complex thing to actually set up and maintain."
      }), "\n", _jsx(_components.p, {
        children: "At a low level though, NodeJS provides us with a lot of cool stuff under the hood features to handle backpressure. One of the ways is to actually use pipelines."
      }), "\n", _jsx(_components.p, {
        children: "Reactive programming and event driven microservices is all hot now. At Quizizz, I haven't had the chance yet to build pipelines to process dozens of TB of data every day (we are still in the 10^10 range, 10^12 is still faraway)."
      }), "\n", _jsx(_components.h3, {
        children: "Conclusion"
      }), "\n", _jsx(_components.p, {
        children: "My early rendezvous with backpressure was very educational. I have written multiple such actions since then - albeit with some minor changes. From sending emails to tens of millions of users, periodically archiving old records in database to some block store like s3, to writing complex distributed pipelines processing hundreds of millions of records each day - the initial encounter transformed the way I think about data pipelines."
      })]
    });
  }
}
export default MDXContent;
