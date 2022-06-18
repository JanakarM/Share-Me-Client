import "./styles.css";

const Banner = ({ className, children, style })=>{
  return (
      <>
        <div className={`container banner ${className}`} style={style}>
          {children}
        </div>
      </>
  )
}

export default Banner;
