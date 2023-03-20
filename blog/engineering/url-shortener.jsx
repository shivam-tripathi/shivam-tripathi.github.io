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
      p: "p",
      a: "a",
      ul: "ul",
      li: "li",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      code: "code",
      pre: "pre",
      span: "span",
      ol: "ol"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.h1, {
        children: "URL Shortener"
      }), "\n", _jsxs(_components.p, {
        children: ["A URL shortener is a tool that allows you to take a long URL and create a shorter, easier-to-remember\nlink that redirects to the original URL. The short URL is typically composed of a shorter domain\nname and a series of characters that represent the original URL. For example, the URL\n\"", _jsx(_components.a, {
          href: "https://www.quizizz.com/refer/referrer_id/campaign_id",
          children: "https://www.quizizz.com/refer/referrer_id/campaign_id"
        }), "\" could be shortened to \"", _jsx(_components.a, {
          href: "https://quiz.iz/5z3b9",
          children: "https://quiz.iz/5z3b9"
        }), "\"."]
      }), "\n", _jsx(_components.p, {
        children: "URL shorteners have become increasingly popular for several reasons:"
      }), "\n", _jsxs(_components.ul, {
        children: ["\n", _jsx(_components.li, {
          children: "Easy to share: Long URLs can be difficult to share, especially on social media platforms like\nTwitter that limit the number of characters you can use in a post. Shortened URLs are much easier to\nshare and can help make your posts more concise."
        }), "\n", _jsx(_components.li, {
          children: "Track clicks: Often we require additional analytics that allow you to track how many clicks your\nshortened links are receiving. This information can be useful for measuring the success of your\nmarketing campaigns or tracking engagement."
        }), "\n", _jsx(_components.li, {
          children: "Save space: Shortened URLs take up less space than long URLs, which can be especially important\nin text messages or other situations where space is limited. For example, in cases like reset\npassword, we might have to send links in SMS which are usually charged by character count."
        }), "\n", _jsx(_components.li, {
          children: "Hide the original URL: Shortened URLs can be used to hide the original URL, which can be useful\nin situations where the original URL is long, unappealing, or contains sensitive information."
        }), "\n", _jsx(_components.li, {
          children: "Redirect traffic: URL shorteners can be used to redirect traffic to different landing pages or\nwebsites, which can be useful for A/B testing, redirecting traffic to affiliate links, or directing\nusers to specific content"
        }), "\n"]
      }), "\n", _jsx(_components.h2, {
        children: "Base62"
      }), "\n", _jsx(_components.p, {
        children: "One way to implement a URL shortener is by using base 62 encoding.\nIn this blog post, we will discuss how to implement a URL shortener using base 62 encoding."
      }), "\n", _jsx(_components.h3, {
        children: "What is Base 62 Encoding?"
      }), "\n", _jsx(_components.p, {
        children: "Base 62 encoding is a method of encoding numbers using the digits 0-9, lowercase letters a-z, and\nuppercase letters A-Z. In base 62 encoding, each character in the encoding represents a unique\nnumber between 0 and 61. This allows us to represent large numbers with a shorter string of\ncharacters."
      }), "\n", _jsx(_components.p, {
        children: "This is similar to binary (0 and 1), decimal (0-9) or hexadecimal (0-9 and A-F to\nrepresent numbers till 16) encodings - but in this case we use 62 characters (which are easily human\nreadable characters - numbers 0-9, lowercase and uppercase english characters) which gives let's us\nrepresent larger numbers compacted into shorter strings."
      }), "\n", _jsx(_components.h3, {
        children: "How Does URL Shortening Work?"
      }), "\n", _jsx(_components.p, {
        children: "URL shortening works by taking a long URL and generating a short URL that redirects to the original\nURL. To implement URL shortening using base 62 encoding, we first need to generate a unique ID for\neach URL that we want to shorten. We can do this by using a counter that increments every time a new\nURL is added to the database. Once we have a unique ID, we can convert it to a base 62 encoded\nstring."
      }), "\n", _jsx(_components.h3, {
        children: "How to Implement URL Shortening Using Base 62 Encoding?"
      }), "\n", _jsx(_components.h4, {
        children: "Step 1: Create a Database"
      }), "\n", _jsx(_components.p, {
        children: "The first step in implementing a URL shortener using base 62 encoding is to create a database to\nstore the URLs.\nThe database should have two columns: one for the long URL and one for the integer id. Whenever\nsomeone looks up a short url, we decode the url to primary serial id and get original URL."
      }), "\n", _jsxs(_components.p, {
        children: [_jsx(_components.code, {
          children: "Note:"
        }), " As the lookup can be on long URL as well, it's a good idea to index the field as well. In case of\nPostgres, we do not explicitly need to create an unique index - as adding a unique constraint will\nautomatically create a unique B-tree index on the column or group of columns listed in the\nconstraint."]
      }), "\n", _jsx(_components.pre, {
        children: _jsxs(_components.code, {
          className: "hljs language-sql",
          children: [_jsx(_components.span, {
            className: "hljs-keyword",
            children: "CREATE"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "TABLE"
          }), " url_shortener (\n  id SERIAL ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "PRIMARY"
          }), " KEY,\n  url TEXT ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "NOT"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "NULL"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "UNIQUE"
          }), ",\n  clicks ", _jsx(_components.span, {
            className: "hljs-type",
            children: "INTEGER"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "NOT"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "NULL"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "DEFAULT"
          }), " ", _jsx(_components.span, {
            className: "hljs-number",
            children: "0"
          }), ",\n  redirect_type ", _jsx(_components.span, {
            className: "hljs-type",
            children: "INT"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "DEFAULT"
          }), " ", _jsx(_components.span, {
            className: "hljs-number",
            children: "302"
          }), ",\n  created_at ", _jsx(_components.span, {
            className: "hljs-type",
            children: "TIMESTAMP"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "NOT"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "NULL"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "DEFAULT"
          }), " ", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "CURRENT_TIMESTAMP"
          }), ",\n  updated_at ", _jsx(_components.span, {
            className: "hljs-type",
            children: "TIMESTAMP"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "NOT"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "NULL"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "DEFAULT"
          }), " ", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "CURRENT_TIMESTAMP"
          }), "\n);\n"]
        })
      }), "\n", _jsx(_components.h4, {
        children: "Step 2: Generate Unique IDs"
      }), "\n", _jsx(_components.p, {
        children: "The next step is to generate a unique ID for each URL that we want to shorten. In our case, adding\nentry in the field ensures we do not insert same URL twice and every entry is mapped against a\nunique integer value. To avoid error on insertion we can something like:"
      }), "\n", _jsx(_components.pre, {
        children: _jsxs(_components.code, {
          className: "hljs language-sql",
          children: [_jsx(_components.span, {
            className: "hljs-keyword",
            children: "INSERT"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "INTO"
          }), " url_shortener (url) ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "SELECT"
          }), " ", _jsx(_components.span, {
            className: "hljs-string",
            children: "'qcom2'"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "ON"
          }), " CONFLICT DO NOTHING;\n"]
        })
      }), "\n", _jsx(_components.h4, {
        children: "Step 3: Encode the id for the URL"
      }), "\n", _jsx(_components.p, {
        children: "Once we have a unique ID for each URL, we can convert it to a base 62 encoded string. We can do\nthis by:"
      }), "\n", _jsxs(_components.ol, {
        children: ["\n", _jsxs(_components.li, {
          children: ["Define a string containing the digits and letters that represent the 62 possible values in base 62.\nFor example, you could use the string ", _jsx(_components.code, {
            children: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
          }), "."]
        }), "\n", _jsx(_components.li, {
          children: "Divide the input integer by 62 and keep track of the remainder. Convert the remainder to a\ncharacter using the digit/letter string from step 1."
        }), "\n", _jsx(_components.li, {
          children: "Repeat step 2 with the quotient until the quotient is zero."
        }), "\n", _jsx(_components.li, {
          children: "Concatenate the characters from step 2 in reverse order to form the base 62 representation of the\ninput integer."
        }), "\n"]
      }), "\n", _jsx(_components.pre, {
        children: _jsxs(_components.code, {
          className: "hljs language-rs",
          children: [_jsx(_components.span, {
            className: "hljs-comment",
            children: "// Every eligible character represents a number in range [0, 62)"
          }), "\n", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "const"
          }), " BASE62_ALPHABET: &[", _jsx(_components.span, {
            className: "hljs-type",
            children: "u8"
          }), "; ", _jsx(_components.span, {
            className: "hljs-number",
            children: "62"
          }), "] = ", _jsx(_components.span, {
            className: "hljs-string",
            children: "b\"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\""
          }), ";\n\n", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "fn"
          }), " ", _jsx(_components.span, {
            className: "hljs-title hljs-function",
            children: "encode_base62"
          }), "(", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "mut"
          }), " num: ", _jsx(_components.span, {
            className: "hljs-type",
            children: "u64"
          }), ") ", _jsx(_components.span, {
            className: "hljs-punctuation",
            children: "->"
          }), " ", _jsx(_components.span, {
            className: "hljs-type",
            children: "String"
          }), " {\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "mut "
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "base62"
          }), " = ", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "vec!"
          }), "[];\n\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// input zero errors are pretty ugly in problems where we rely on mod"
          }), "\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "if"
          }), " num == ", _jsx(_components.span, {
            className: "hljs-number",
            children: "0"
          }), " {\n\t\tbase62.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "push"
          }), "(BASE62_ALPHABET[", _jsx(_components.span, {
            className: "hljs-number",
            children: "0"
          }), "]);\n\t} ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "else"
          }), " {\n\t\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "while"
          }), " num > ", _jsx(_components.span, {
            className: "hljs-number",
            children: "0"
          }), " {\n\t\t\t\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword"
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "rem"
          }), " = (num % ", _jsx(_components.span, {
            className: "hljs-number",
            children: "62"
          }), ") ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "as"
          }), " ", _jsx(_components.span, {
            className: "hljs-type",
            children: "usize"
          }), ";\n\t\t\t\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// remainder is mapped to base62 mapping above - modulus returns an index [0, 62)."
          }), "\n\t\t\t\tbase62.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "push"
          }), "(BASE62_ALPHABET[rem]);\n\t\t\t\tnum /= ", _jsx(_components.span, {
            className: "hljs-number",
            children: "62"
          }), ";\n\t\t}\n\t\tbase62.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "reverse"
          }), "();\n\t}\n\tString::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from_utf8"
          }), "(base62).", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "unwrap"
          }), "()\n}\n\n", _jsx(_components.span, {
            className: "hljs-meta",
            children: "#[cfg(test)]"
          }), "\n", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "mod"
          }), " tests {\n\t", _jsx(_components.span, {
            className: "hljs-meta",
            children: "#[test]"
          }), "\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "fn"
          }), " ", _jsx(_components.span, {
            className: "hljs-title hljs-function",
            children: "test_encode"
          }), "() {\n\t\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "encode_base62"
          }), "(", _jsx(_components.span, {
            className: "hljs-number",
            children: "0"
          }), "), String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"0\""
          }), "));\n\t\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "encode_base62"
          }), "(", _jsx(_components.span, {
            className: "hljs-number",
            children: "123456789"
          }), "), String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"8m0Kx\""
          }), "));\n\t\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "encode_base62"
          }), "(", _jsx(_components.span, {
            className: "hljs-number",
            children: "999999999"
          }), "), String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"15FTGf\""
          }), "));\n\t\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "encode_base62"
          }), "(", _jsx(_components.span, {
            className: "hljs-number",
            children: "123456789012"
          }), "), String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"2aL26ws\""
          }), "));\n\t\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "encode_base62"
          }), "(", _jsx(_components.span, {
            className: "hljs-number",
            children: "9223372036854775807"
          }), "), String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"LygHa16AHYF\""
          }), "));\n\t}\n}\n"]
        })
      }), "\n", _jsx(_components.h4, {
        children: "Step 4: Decode the short URL"
      }), "\n", _jsx(_components.p, {
        children: "Once someone hits the shorter URL, we can decode the shorter URL to get the primary key which then\ncan be used to extract the long URL. We can do this by:"
      }), "\n", _jsxs(_components.ol, {
        children: ["\n", _jsxs(_components.li, {
          children: ["Define a string containing the digits and letters that represent the 62 possible values in base 62.\nFor example, you could use the string ", _jsx(_components.code, {
            children: "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
          }), "."]
        }), "\n", _jsx(_components.li, {
          children: "Iterate over the characters in the base 62 encoding in reverse order. For each character, find\nits index in the digit/letter string from step 1."
        }), "\n", _jsx(_components.li, {
          children: "Multiply the value of the index by 62 raised to the power of its position in the encoding\n(starting from 0)."
        }), "\n", _jsx(_components.li, {
          children: "Add up the results of step 3 for each character in the encoding to obtain the decimal value of\nthe base 62 encoding."
        }), "\n"]
      }), "\n", _jsx(_components.pre, {
        children: _jsxs(_components.code, {
          className: "hljs language-rs",
          children: [_jsx(_components.span, {
            className: "hljs-keyword",
            children: "const"
          }), " BASE62_ALPHABET: &[", _jsx(_components.span, {
            className: "hljs-type",
            children: "u8"
          }), "; ", _jsx(_components.span, {
            className: "hljs-number",
            children: "62"
          }), "] = ", _jsx(_components.span, {
            className: "hljs-string",
            children: "b\"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\""
          }), ";\n\n", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "fn"
          }), " ", _jsx(_components.span, {
            className: "hljs-title hljs-function",
            children: "decode_base62"
          }), "(encoded: &", _jsx(_components.span, {
            className: "hljs-type",
            children: "str"
          }), ") ", _jsx(_components.span, {
            className: "hljs-punctuation",
            children: "->"
          }), " ", _jsx(_components.span, {
            className: "hljs-type",
            children: "u64"
          }), " {\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "mut "
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "num"
          }), " = ", _jsx(_components.span, {
            className: "hljs-number",
            children: "0"
          }), ";\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "for"
          }), " ", _jsx(_components.span, {
            className: "hljs-variable",
            children: "c"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "in"
          }), " encoded.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "bytes"
          }), "() {\n\t\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword"
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "val"
          }), " = ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "match"
          }), " c {\n\t\t\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// if character lies in [0, 9] range, it is mapped between [0-10)"
          }), "\n\t\t\t", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'0'"
          }), "..=", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'9'"
          }), " => c - ", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'0'"
          }), ",\n\t\t\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// if character lies in [a, z] range it is mapped between [10-36)"
          }), "\n\t\t\t", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'a'"
          }), "..=", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'z'"
          }), " => c - ", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'a'"
          }), " + ", _jsx(_components.span, {
            className: "hljs-number",
            children: "10"
          }), ",\n\t\t\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// if character lies in [A, Z] range it is mapped between [36-62)"
          }), "\n\t\t\t", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'A'"
          }), "..=", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'Z'"
          }), " => c - ", _jsx(_components.span, {
            className: "hljs-string",
            children: "b'A'"
          }), " + ", _jsx(_components.span, {
            className: "hljs-number",
            children: "36"
          }), ",\n\t\t\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// invalid character"
          }), "\n\t\t\t_ => ", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "panic!"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"Invalid base62 character: {}\""
          }), ", c),\n\t\t} ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "as"
          }), " ", _jsx(_components.span, {
            className: "hljs-type",
            children: "u64"
          }), ";\n\t\tnum = num * ", _jsx(_components.span, {
            className: "hljs-number",
            children: "62"
          }), " + val;\n\t}\n\tnum\n}\n\n", _jsx(_components.span, {
            className: "hljs-meta",
            children: "#[cfg(test)]"
          }), "\n", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "mod"
          }), " tests {\n\t", _jsx(_components.span, {
            className: "hljs-meta",
            children: "#[test]"
          }), "\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "fn"
          }), " ", _jsx(_components.span, {
            className: "hljs-title hljs-function",
            children: "test_decode"
          }), "() {\n\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "decode_base62"
          }), "(String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"0\""
          }), ")), ", _jsx(_components.span, {
            className: "hljs-number",
            children: "0"
          }), ");\n\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "decode_base62"
          }), "(String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"8m0Kx\""
          }), ")), ", _jsx(_components.span, {
            className: "hljs-number",
            children: "123456789"
          }), ");\n\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "decode_base62"
          }), "(String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"15FTGf\""
          }), ")), ", _jsx(_components.span, {
            className: "hljs-number",
            children: "999999999"
          }), ");\n\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "decode_base62"
          }), "(String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"2aL26ws\""
          }), ")), ", _jsx(_components.span, {
            className: "hljs-number",
            children: "123456789012"
          }), ");\n\t\t", _jsx(_components.span, {
            className: "hljs-built_in",
            children: "assert_eq!"
          }), "(", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "decode_base62"
          }), "(String::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "from"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"LygHa16AHYF\""
          }), ")), ", _jsx(_components.span, {
            className: "hljs-number",
            children: "9223372036854775807"
          }), ");\n\t}\n}\n"]
        })
      }), "\n", _jsx(_components.h4, {
        children: "Serve the URL"
      }), "\n", _jsx(_components.p, {
        children: "Based on whether we want to do a permanent redirect or a temporary one, we can set the status code\nas 301 or 302."
      }), "\n", _jsx(_components.p, {
        children: "A permanent redirect is indicated by an HTTP status code of 301 Moved Permanently. This status code\nis used to indicate that the original URL has been permanently replaced by a new URL. When a web\nbrowser or search engine crawler encounters a permanent redirect, it will update its index or cache\nto point to the new URL. Permanent redirects are useful when a website has changed its URL structure\nor has moved to a new domain."
      }), "\n", _jsx(_components.p, {
        children: "In our case, in case of permanent redirects we will miss out on\ngetting analytics metadata like clicks as client browsers will never hit the old short url again.\nThis, however, can be controlled with a TTL."
      }), "\n", _jsx(_components.p, {
        children: "On the other hand, a temporary redirect is indicated by an HTTP status code of 302 Found or 307\nTemporary Redirect. This status code is used to indicate that the original URL has been temporarily\nreplaced by a new URL. When a web browser or search engine crawler encounters a temporary redirect,\nit will temporarily update its index or cache to point to the new URL, but it will continue to check\nthe original URL for updates. Temporary redirects are useful when a website is temporarily\nunavailable or has moved to a different URL for a short period of time."
      }), "\n", _jsx(_components.p, {
        children: "In our case, it is helpful if we want to track each time the main the short URL is hit."
      }), "\n", _jsx(_components.pre, {
        children: _jsxs(_components.code, {
          className: "hljs language-rs",
          children: [_jsx(_components.span, {
            className: "hljs-keyword",
            children: "use"
          }), " actix_web::{HttpResponse, ResponseError, web, get};\n", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "use"
          }), " sqlx::{PgPool, Postgres, Row};\n\n", _jsxs(_components.span, {
            className: "hljs-meta",
            children: ["#[get(", _jsx(_components.span, {
              className: "hljs-string",
              children: "\"/{short_url}\""
            }), ")]"]
          }), "\n", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "async"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "fn"
          }), " ", _jsx(_components.span, {
            className: "hljs-title hljs-function",
            children: "redirect"
          }), "(short_url: web::Path<", _jsx(_components.span, {
            className: "hljs-type",
            children: "String"
          }), ">, db_pool: web::Data<PgPool>) ", _jsx(_components.span, {
            className: "hljs-punctuation",
            children: "->"
          }), " ", _jsx(_components.span, {
            className: "hljs-type",
            children: "Result"
          }), "<HttpResponse, sqlx::Error> {\n\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// Decode the short_url into u62 primary key"
          }), "\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword"
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "id"
          }), " = ", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "decode_base62"
          }), "(short_url);\n\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// Query the database for the long URL and redirect type"
          }), "\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword"
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "result"
          }), " = sqlx::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "query"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"SELECT url, redirect_type FROM url_shortener WHERE id = $1\""
          }), ")\n\t\t.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "bind"
          }), "(&id)\n\t\t.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "fetch_one"
          }), "(db_pool.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "get_ref"
          }), "())\n\t\t.", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "await"
          }), "?;\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword"
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "long_url"
          }), ": ", _jsx(_components.span, {
            className: "hljs-type",
            children: "String"
          }), " = result.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "get"
          }), "(", _jsx(_components.span, {
            className: "hljs-number",
            children: "0"
          }), ");\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword"
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "redirect_type"
          }), ": ", _jsx(_components.span, {
            className: "hljs-type",
            children: "i32"
          }), " = result.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "get"
          }), "(", _jsx(_components.span, {
            className: "hljs-number",
            children: "1"
          }), ");\n\n\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// Determine the redirect status code based on the redirect type value"
          }), "\n\t", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "let"
          }), " ", _jsx(_components.span, {
            className: "hljs-keyword"
          }), _jsx(_components.span, {
            className: "hljs-variable",
            children: "status_code"
          }), " = ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "if"
          }), " redirect_type == ", _jsx(_components.span, {
            className: "hljs-number",
            children: "301"
          }), " { ", _jsx(_components.span, {
            className: "hljs-number",
            children: "301"
          }), " } ", _jsx(_components.span, {
            className: "hljs-keyword",
            children: "else"
          }), " { ", _jsx(_components.span, {
            className: "hljs-number",
            children: "302"
          }), " };\n\n\t", _jsx(_components.span, {
            className: "hljs-comment",
            children: "// Perform the redirect"
          }), "\n\t", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "Ok"
          }), "(HttpResponse::", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "build"
          }), "(status_code)\n\t\t.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "header"
          }), "(", _jsx(_components.span, {
            className: "hljs-string",
            children: "\"Location\""
          }), ", long_url)\n\t\t.", _jsx(_components.span, {
            className: "hljs-title hljs-function hljs-invoke",
            children: "finish"
          }), "())\n}\n"]
        })
      }), "\n", _jsx(_components.h3, {
        children: "Conclusion"
      }), "\n", _jsx(_components.p, {
        children: "And that's it. In this post we covered why it is important to shorten long URLs and how to do it\nusing base62 encoding. Hope it was helpful!"
      })]
    });
  }
}
export default MDXContent;
