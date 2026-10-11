import "./index.css"
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <a href="/labs/lab2/tailwind">Open Tailwind CSS lab →</a>
      </p>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      <p
        id="wd-ai-style-attr"
        style={{ backgroundColor: "purple", color: "white" }}
      >
        This paragraph uses a style attribute to set a purple background and
        white text, demonstrating another inline color combination.
      </p>
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This is my personal style attribute example, it has green background with
        yellow text.
      </p>
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the
          same name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a different
          look and feel
        </p>
        <p id="wd-id-selector-3">
          This is my personal third ID selector, a blue background with
          white text, matched by the id wd-id-selector-3.
        </p>
        <p id="wd-ai-id-selector">
          This is a sample fourth paragraph with an orange background and
          black text, matched by the id wd-ai-id-selector.
        </p>
      </div>
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        <p className="wd-your-class">
          This is my personal class, a teal background with white text,
          shared between this paragraph and the heading below.
        </p>
        <h4 className="wd-your-class">
          This heading shares my personal teal class with the paragraph above.
        </h4>
        <p className="wd-ai-class-selector">
          This is a sample paragraph using a navy background with white text.
        </p>
        <h4 className="wd-ai-class-selector">
          This heading shares the sample navy class with the paragraph above.
        </h4>
      </div>
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places
            in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .wd-selector-1 .wd-selector-3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              <span className="wd-ai-selector-5">
                This is a sample span with a purple background, matched as a
                descendant of wd-selector-1.
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
            <div className="wd-your-selector-5">
              This is my personal extra element, a teal background,
              matched as a descendant of wd-selector-1 via
              .wd-selector-1 .wd-your-selector-5.
            </div>
          </div>
        </div>
      </div>
      <div id="wd-css-specificity">
        <h3>Specificity</h3>
        <p id="wd-cascade-test" className="wd-cascade-test">
          This paragraph has a tag rule (p), a class rule
          (.wd-cascade-test), and an id rule (#wd-cascade-test) all
          targeting background-color. The id rule should win regardless of
          source order, because id selectors are more specific than class
          selectors, which are more specific than tag selectors.
        </p>
      </div>
      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}