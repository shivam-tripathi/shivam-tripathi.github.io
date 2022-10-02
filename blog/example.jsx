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
      h2: "h2",
      p: "p",
      a: "a",
      sup: "sup",
      del: "del",
      table: "table",
      thead: "thead",
      tr: "tr",
      th: "th",
      ul: "ul",
      li: "li",
      input: "input",
      pre: "pre",
      code: "code",
      span: "span",
      section: "section",
      ol: "ol"
    }, props.components);
    return _jsxs(_Fragment, {
      children: [_jsx(_components.h1, {
        children: "GFM"
      }), "\n", _jsx(_components.h2, {
        children: "Autolink literals"
      }), "\n", _jsxs(_components.p, {
        children: [_jsx(_components.a, {
          href: "http://www.example.com",
          children: "www.example.com"
        }), ", ", _jsx(_components.a, {
          href: "https://example.com",
          children: "https://example.com"
        }), ", and ", _jsx(_components.a, {
          href: "mailto:contact@example.com",
          children: "contact@example.com"
        }), "."]
      }), "\n", _jsx(_components.h2, {
        children: "Footnote"
      }), "\n", _jsxs(_components.p, {
        children: ["A note", _jsx(_components.sup, {
          children: _jsx(_components.a, {
            href: "#user-content-fn-1",
            id: "user-content-fnref-1",
            "data-footnote-ref": true,
            "aria-describedby": "footnote-label",
            children: "1"
          })
        })]
      }), "\n", _jsx(_components.h2, {
        children: "Strikethrough"
      }), "\n", _jsxs(_components.p, {
        children: [_jsx(_components.del, {
          children: "one"
        }), " or ", _jsx(_components.del, {
          children: "two"
        }), " tildes."]
      }), "\n", _jsx(_components.h2, {
        children: "Table"
      }), "\n", _jsx(_components.table, {
        children: _jsx(_components.thead, {
          children: _jsxs(_components.tr, {
            children: [_jsx(_components.th, {
              children: "a"
            }), _jsx(_components.th, {
              align: "left",
              children: "b"
            }), _jsx(_components.th, {
              align: "right",
              children: "c"
            }), _jsx(_components.th, {
              align: "center",
              children: "d"
            })]
          })
        })
      }), "\n", _jsx(_components.h2, {
        children: "Tasklist"
      }), "\n", _jsxs(_components.ul, {
        className: "contains-task-list",
        children: ["\n", _jsxs(_components.li, {
          className: "task-list-item",
          children: [_jsx(_components.input, {
            type: "checkbox",
            disabled: true
          }), " ", "to do"]
        }), "\n", _jsxs(_components.li, {
          className: "task-list-item",
          children: [_jsx(_components.input, {
            type: "checkbox",
            checked: true,
            disabled: true
          }), " ", "done"]
        }), "\n"]
      }), "\n", _jsx(_components.pre, {
        children: _jsxs(_components.code, {
          className: "hljs language-js",
          children: [_jsx(_components.span, {
            className: "hljs-keyword",
            children: "const"
          }), " a = ", _jsx(_components.span, {
            className: "hljs-number",
            children: "10"
          }), ";\n", _jsx(_components.span, {
            className: "hljs-variable hljs-language",
            children: "console"
          }), ".", _jsx(_components.span, {
            className: "hljs-title hljs-function",
            children: "log"
          }), "(", _jsx(_components.span, {
            className: "hljs-number",
            children: "23"
          }), ");\n"]
        })
      }), "\n", _jsxs(_components.section, {
        "data-footnotes": true,
        className: "footnotes",
        children: [_jsx(_components.h2, {
          id: "footnote-label",
          className: "sr-only",
          children: "Footnotes"
        }), "\n", _jsxs(_components.ol, {
          children: ["\n", _jsxs(_components.li, {
            id: "user-content-fn-1",
            children: ["\n", _jsxs(_components.p, {
              children: ["Big note. ", _jsx(_components.a, {
                href: "#user-content-fnref-1",
                "data-footnote-backref": true,
                className: "data-footnote-backref",
                "aria-label": "Back to content",
                children: "↩"
              })]
            }), "\n"]
          }), "\n"]
        }), "\n"]
      })]
    });
  }
}
export default MDXContent;
