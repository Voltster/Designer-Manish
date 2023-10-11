import AnimatedCursor from "react-animated-cursor"

const Cursor = () => {
  return (
    <div className="z-[999]">
        <AnimatedCursor 
        innerSize={6}
        outerSize={35}
        outerAlpha={0}
        innerScale={2}
        outerScale={1}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white"
        }}
        outerStyle={{
          border: '2px solid white'
        }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    </div>
  )
}

export default Cursor
