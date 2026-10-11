export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p className="wd-fg-color-black">
        This is my personal mixed sentence, written mostly in black but with{" "}
        <span className="wd-fg-color-blue">this part in blue</span> to show
        two foreground colors in one sentence.
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This is a sample paragraph written mostly in blue, but{" "}
        <span className="wd-fg-color-black">this part is black</span> to
        show another foreground color mix.
      </p>
    </div>
  );
}