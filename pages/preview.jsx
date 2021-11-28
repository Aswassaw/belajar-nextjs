import React from "react";

const Preview = ({ data }) => {
  return (
    <div>
      <h1 className='text-center my-5'>{data}</h1>
    </div>
  );
};

export default Preview;

export function getStaticProps(context) {
  console.log("Running getStaticProps", context.previewData);

  return {
    props: {
      data: context.preview
        ? "List of draft articles"
        : "List of published articles",
    },
  };
}
