import React from "react";

function Segment({ childern, contect, title }) {
  return (
    <div>
      <SegmentTitle>{title}</SegmentTitle>
    </div>
  );
}

function SegmentTitle({ childern, title = "" }) {
  return (
    <div>
      <span>{childern || title}</span>
    </div>
  );
}

function SegmentContect() {
  return;
}

function SegmentAction() {
  return;
}

export { SegmentTitle, SegmentContect, SegmentAction };
export default Segment;
