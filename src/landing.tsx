import React from "react";

export default ({ pages, list }: { pages: string[], list?: JSX.Element }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1
        style={{
          color: "var(--primary)",
          margin: "0.5rem",
          fontSize: '1.75rem'
        }}
      >
        Musings on Life, Universe, and Everything
      </h1>
      <img
        style={{
          width: "200px",
          border: "10px inset",
          borderRadius: "500px",
          margin: "10px",
        }}
        src="/assets/hero.png"
        className="heroimg"
      />
      <p style={{ fontWeight: "bold", fontFamily: "'Pragati Narrow', sans-serif;" }}>
        इयं विसृष्टिर्यत आबभूव यदि वा दधे यदि वा न ।
        <br />
        यो अस्याध्यक्षः परमे व्योमन्त्सो अङ्ग वेद यदि वा न वेद ॥
      </p>
      <p style={{ fontSize: ".75rem", fontFamily: "sans-serif" }}>
        Whence all creation had its origin, the creator, whether s/he fashioned
        it or whether s/he did not, <br />
        The creator, who surveys it all from highest heaven, s/he knows — or
        maybe even s/he does not know. <br />
        <a href="https://en.wikipedia.org/wiki/Nasadiya_Sukta">
          Nasadiya Sukta, 7:129:10 Rig Veda
        </a>
      </p>
      <div>
        <h3>Tree of Articles</h3>
        <div style={{ textAlign: "left", fontSize: '1rem' }}>{list}</div>
        {/* <div style={{ textAlign: "left", fontSize: '1rem' }}>
          <ul>
            {pages.map((page) => (
              <li>
                <a href={page}>{page}</a>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};
