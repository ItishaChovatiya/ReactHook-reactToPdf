import React from 'react';
import { usePDF } from 'react-to-pdf';

export default function Pdf(props) {
  // Destructuring props to get abc, name, and body
  const { abc, name, body } = props.itisha;

  // Setting up usePDF hook to generate PDF
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });

  /*
   * The Pdf component renders an image, a heading, and a paragraph,
   * and includes a button to download the content as a PDF.
   * The content to be converted to PDF is wrapped in a div with a ref attached.
   */
  return (
    <div className='mx-auto d-block'>
      <div ref={targetRef}>
        {/* Displaying the image */}
        <img src={abc} className="w-50 mx-auto" alt='scs' />
        {/* Displaying the name */}
        <h2>{name}</h2>
        {/* Displaying the body text */}
        <p>{body}</p>
      </div>
      <div>
        {/* Button to trigger PDF download */}
        <button className='btn btn-success' onClick={() => toPDF()}>Download PDF</button>
      </div>
    </div>
  );
}
