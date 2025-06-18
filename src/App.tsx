import { useState } from 'react'
import './App.css'
import Card from './Card.tsx';

function App() {
  const [color, setColor] = useState('#9F6565')
  const [colorH1, setColorH1] = useState('#ffaaaa')
  const [colorH2, setColorH2] = useState('#4395ff')
  const [colorText, setColorText] = useState('#000000')

  return (
    <>
      <div className="App">
        <h1>Design App Remastered</h1>
        <h2>Lets learn abit of colour theory shall we?</h2>
        <hr />

        <div className="CardContainer">
          <input type="color" onChange={(color) => setColor(color.target.value)} />
          <Card title="Background Color" description="
          The background colour of a website is more than just a visual choice—it sets the emotional tone and usability of the entire experience. A well-chosen background colour can influence mood, for example warm colours (reds, oranges) can energize, while cool colours (blues, greens) calm and reassure. Neutral backgrounds (whites, grays) create a sense of openness and focus.
          Good background colours can also enhance readability, high contrast between background and text improves legibility. Poor contrast can strain the eyes and drive users away. Good background colours also guide attention, with subtle background shades helping direct focus to key content or calls to action without overwhelming the user.
          Give it a try by changing the background colour!" />
        </div>

        <div className="CardContainer">
          <Card title="A good Title" description="
          A well-chosen title color can instantly communicate your brand's personality and set the emotional tone for the entire site. Bold, high-contrast colors make the title stand out and grab attention, while softer or muted tones can create a sense of elegance or calm. Always ensure the title color contrasts well with the background for maximum readability and accessibility. Consistency in title color across your site also helps reinforce brand recognition and trust.
          try it out by changing the title color!"/>
          <input type="color" onChange={(colorH1) => setColorH1(colorH1.target.value)} />
        </div>

        <div className="CardContainer">
          <input type="color" onChange={(colorH2) => setColorH2(colorH2.target.value)} />
          <Card title="Headings" description="Using distinct colors for different heading levels (h1, h2, h3, etc.) helps users quickly understand the structure of your content. A clear color hierarchy guides the eye and improves navigation.
          Heading colors should align with your brand palette. Using brand colors for primary headings reinforces identity, while secondary headings can use complementary or neutral tones.
          Try it out by changing the colour of the headings in this website!" />
        </div>

        <div className="CardContainer">
          <Card title="Finally, paragraph text!" description='The main goal of paragraph text is clear communication. Choose a text color that offers strong contrast with the background—typically dark text on a light background or vice versa. This reduces eye strain and makes content easy to read.
          Unlike headings, paragraph text should not compete for attention. Avoid using bright or saturated colors for body text, as these can be distracting and tiring to read over long passages.'/>
          <input type="color" onChange={(colorText) => setColorText(colorText.target.value)}></input>
        </div>


      </div>
      <style>
        {`
          p{
            color:${colorText};
          }
          .CardContainer{
            display:flex;
            background-color:rgb(255, 155, 93);
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin: 20px;
          }
          hr {
            border-color: black;
            background-color: transparent;
            border-style: solid;
            border-width: 5px;
            width: 90vw;
          }
          h1 {
            color: ${colorH1};
            font-size: 7vw;
            line-height: 1.1;
            line-weight: 800;
          }
          h2 {
            color: ${colorH2};
            font-size: 3rem;
            line-height: 0.8;
            line-weight: 600;
          }
          body {
            background-color: ${color};
          }
        `}
      </style>
    </>
  )
}

export default App
