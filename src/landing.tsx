import React from "react";

export default ({ pages, list }: { pages: string[], list?: JSX.Element }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{fontFamily: 'var(--devnagari)', fontSize: '4rem', margin: 0, color: 'black'}}>संक्षिप्त</h1>
      <h2
        style={{
          color: "var(--primary)",
          margin: "0.5rem",
          fontSize: '1.75rem'
        }}
      >
        Musings on Life, Universe, and Everything
      </h2>
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
      <div>
        <h3>Index Tree</h3>
        <div style={{ textAlign: "left", fontSize: '1.25rem' }}>{list}</div>
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
