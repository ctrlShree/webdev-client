import type { ReactNode } from "react";

function HighlightedBox({
    backgroundColor = "lightyellow",
    borderColor = "orange",
    borderWidth = 2,
    borderRadius = 8,
    children,
}: {
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: string | number;
    borderRadius?: string | number;
    children?: ReactNode;
}) {
    return (
        <div
            style={{
                backgroundColor,
                borderColor,
                borderWidth,
                borderStyle: "solid",
                borderRadius,
                padding: "0.75rem 1rem",
                marginBottom: "0.75rem",
            }}
        >
            {children}
        </div>
    );
}

export default function HighlightedBoxLab() {
    return (
        <div id="wd-highlighted-box">
            <h3>Highlighted Box</h3>
            <HighlightedBox
                backgroundColor="lavender"
                borderColor="purple"
                borderWidth={3}
                borderRadius={12}
            >
                <h4>Callout</h4>
                <p>
                    This box wraps <strong>any</strong>{" "}
                    children — headings, paragraphs, lists, and more.
                </p>
                <ul>
                    <li>backgroundColor</li>
                    <li>borderColor</li>
                    <li>borderWidth</li>
                    <li>borderRadius</li>
                </ul>
            </HighlightedBox>
            <HighlightedBox
                backgroundColor="#e8f5e9"
                borderColor="green"
                borderWidth={2}
                borderRadius={20}
            >
                <p>
                    A second box with different style props wrapping different content.
                </p>
            </HighlightedBox>
            <HighlightedBox
                backgroundColor="#fff3e0"
                borderColor="darkorange"
                borderWidth={2}
                borderRadius={16}
            >
                <h4>Shreyash Sawant</h4>
                <ul>
                    <li>Build and deploy a full-stack web app with Next.js and MongoDB</li>
                    <li>Get comfortable with React state management and hooks</li>
                    <li>Understand how to design and consume REST APIs</li>
                </ul>
            </HighlightedBox>
            <HighlightedBox
                backgroundColor="honeydew"
                borderColor="seagreen"
                borderWidth={2}
                borderRadius={10}
            >
                <h4>Sample nested content</h4>
                <ul>
                    <li>p</li>
                    <li>table</li>
                    <li>form</li>
                </ul>
            </HighlightedBox>
        </div>
    );
}