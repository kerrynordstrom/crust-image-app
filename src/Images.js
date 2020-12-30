import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const Images = (props) => {
  console.log('props w/in Images component', {props})
 return props.images.map((image, i) => {
   console.log('image souce?', {name: image.name, src: image.src, type: image.type, size: image.size})
   return (
    <div key={i} className="fadein">
      <div
        onClick={() => props.removeImage(image.public_id)}
        className="delete"
      >
        <FontAwesomeIcon icon={faTimesCircle} size="2x" />
      </div>
      <img src={image.src} alt="" />
    </div>

  )
   })
   ;
}

  export default Images;
