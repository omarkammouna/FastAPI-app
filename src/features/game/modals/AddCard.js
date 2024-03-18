import React, { useState, useRef } from 'react'
import classes from '../assets/AddCard.module.css'
import { ReactComponent as VectorExitPop } from '../assets/vectors/VectorExitPop.svg'
import { ReactComponent as VectorContentPop } from '../assets/vectors/VectorContentPop.svg'
import { ReactComponent as VectorAddSound } from '../assets/vectors/VectorAddSound.svg'
import { ReactComponent as VectorAddImage } from '../assets/vectors/VectorAddImage.svg'
import { ReactComponent as VectorImageCrop } from '../assets/vectors/VectorImageCrop.svg'
import { ReactComponent as VectorMinus } from '../assets/vectors/VectorMinus.svg'
import { ReactComponent as VectorPlus } from '../assets/vectors/VectorPlus.svg'

const initialState = {
  id: '',
  name: '',
  textual_content: '',
  visual_content: '',
  audio_content: '',
  search_labels: ''

}

const AddCard = (props) => {

  const [contentType, setContentType] = useState('text');
  const [cropImage, setCropImage] = useState(false);
  const [cropLine, setCropLine] = useState(false);
  const [data, setData] = useState(initialState);
  const {
    name,
    textual_content,
    visual_content,
    audio_content,
    search_labels
  } = data;

  fetch(`http://localhost:8000/cards/${data.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Created data:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

  const [imageFile, setImageFile] = useState(null);
  const imageInputRef = useRef(null);

  const handleImageSelect = () => {

    imageInputRef.current.click();
  };

  const handleImageChange = (e) => {

    const selectedImage = e.target.files[0];
    console.log('Selected image:', selectedImage);
    setImageFile(selectedImage);
  };

  

  const [imageProgress, setImageProgress] = useState(null);
  const audioInputRef = useRef(null);

  const [audioFile, setAudioFile] = useState(null);

  const handleAudioSelect = () => {

    audioInputRef.current.click();
  };

  const handleAudioChange = (e) => {

    const selectedAudio = e.target.files[0];
    console.log('Selected audio:', selectedAudio);
    setAudioFile(selectedAudio);
  };

  const handleTextToSpeech = () => {
    const text = textual_content ;
    const speech = SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);

  }


  const [audioProgress, setAudioProgress] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  fetch(`http://localhost:8000/cards/${data.id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Updated data:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

  


  return (props.trigger) ? (
    <div className={classes.modalBackdrop}>
      <div className={classes.bg}>
        {props.children}
        <VectorExitPop className={classes.exit} onClick={() => { props.setTrigger(false) }} />
        <div className={classes.title}>Ajouter Carte</div>
        {!cropImage && <>
          <div className={classes.subTitleOne}>Nom de carte</div>
          <div className={classes.containerOne}>
            <input
              className={classes.placeholder}
              placeholder='Nom de Carte'
              onChange={handleChange}
              value={name}
            />
          </div>
          <div className={classes.subTitleTwo}>Decription (facultative)</div>
          <div className={classes.containerTwo}>
            <input
              className={classes.placeholder}
              placeholder='Decription'
              onChange={handleChange}
              value={search_labels}
            />
          </div>
          <div className={classes.switchContainer}>
            <VectorContentPop className={classes.vector} />
            <div className={classes.name}>Contenu</div>
            <div className={classes.switcher}>
              <div className={classes.element} on onClick={() => { setContentType('text') }}>
                <div className={classes.text}>Texte</div>
              </div>
              <div className={classes.element} on onClick={() => { setContentType('image') }}>
                <div className={classes.text}>Image</div>
              </div>
              <div className={classes.element} on onClick={() => { setContentType('audio') }}>
                <div className={classes.text}>Son</div>
              </div>
            </div>
          </div>
          {contentType === 'text' &&
            <div className={classes.textArea}>
              <input
                className={classes.placeholder}
                placeholder='entrer le contenu du texte'
                onChange={handleChange}
                
              />
            </div>}
          {contentType === 'image' &&
            <div className={classes.imageArea}>
              <div className={classes.placeholder}>
                <VectorAddImage className={classes.vectorAddImage} onClick={() => { setCropImage(true) }} />
              </div>
              <input
                type='file'
                onChange={
                  handleImageChange
                }
                ref={imageInputRef}
                className={classes.inputImage}
              />
              <div
                className={classes.message}
                onClick={
                  handleImageSelect
                }
              >
                importer une image
              </div>
            </div>}
          {contentType === 'audio' && 
          <div className={classes.soundArea}>

            <div className={classes.placeholder}>
              <VectorAddSound 
              className={classes.vectorAddSound} 
              onClick={
                handleAudioSelect
              }
              />
            </div>
            <input
                type='file'
                onChange={
                  handleAudioChange
                }
                ref={audioInputRef}
                className={classes.inputSound}
              />
            <div 
            className={classes.message}
            onClick={
              handleAudioSelect
            }
            >
              importer un son
            </div>

            <div className={classes.horizontalLine}>
            </div>

            {/* <div className={classes.textToSpeach}>
              <input type='checkbox' className={classes.check} />
            </div> */}

            <div className={classes.checkboxcontainer}>
              <input type="checkbox" id="checkbox1" className={classes.checkboxcustom} />
              <label htmlFor="checkbox1" className={classes.checkboxlabel}>utiliser “du texte à paroles”</label>
            </div>



          </div>}

          <button className={classes.add} >
            <div className={classes.ajouter}>Ajouter</div>
          </button>
        </>}
        {cropImage && <>

          <div className={classes.cropBody}>
            <div className={classes.croppedImage}>
              <div className={classes.placeholder}>
                <VectorImageCrop className={classes.imageVector} />
              </div>
            </div>
          </div>
          <div className={classes.minus}>
            <VectorMinus className={classes.vectorMinus} onClick={() => { setCropLine(false) }} />
          </div>
          <div className={`${cropLine ? `${classes.cropLineActive}` : classes.cropLine}`}>
          </div>
          <div className={classes.plus}>
            <VectorPlus className={classes.vectorPlus} onClick={() => { setCropLine(true) }} />
          </div>
          <div className={classes.add}>
            <div className={classes.ajouter} onClick={() => { setCropImage(false) }}>
              Ajuster l'image
            </div>
          </div>
        </>}



      </div>
    </div>
  ) : "";
}

export default AddCard