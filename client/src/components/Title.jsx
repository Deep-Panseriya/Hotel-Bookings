const Title = ({ title, subtitle, align, font }) => {
  const alignmentClasses =
    align === 'left' ? 'md:items-start md:text-left' : 'items-center text-center'

  return (
    <div className={`flex flex-col mb-4 justify-center ${alignmentClasses}`}>
      <h1 className={`text-4xl md:text-[40px] mt-5 font-bold ${font} text-gray-900`}>
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
        {subtitle}
      </p>
    </div>
  )
}

export default Title
