import { animate, motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import React, { useEffect } from 'react'

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

interface Button {
  name: string
  custumStyle?: string
  icon?: React.ElementType
  click?: () => void
}

function AnimationButton(button: Button) {
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    // skipcq: JS-0328  to skip code analysis for this line
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  })
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
  return (
    <motion.button
      onClick={button.click}
      style={{ border, boxShadow }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${
        button.custumStyle ? button.custumStyle : ''
      }flex w-fit justify-center items-center gap-2 px-4 py-2 `}
    >
      {button.name}
      {button.icon ? <button.icon /> : null}
    </motion.button>
  )
}

export default AnimationButton
