import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadImg from '../assets/pro-Image-removebg-preview - Copy.png';
import { addCourseAPI } from '../services/allAPI';
import { addCourseContext } from '../contexts/ContextShare';


const Add = () => {
  const {addCourseResponse,setAddCourseResponse} = useContext(addCourseContext)
  const [invalidYouTubeLink, setInvalidYouTubeLink] = useState(false);
  const [preview, setPreview] = useState("");
  const [uploadFileStatus, setUploadFileStatus] = useState(false);
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    author: "",
    description: "",
    courseImage: "",
    youtubeLink: "",
  });

  const [show, setShow] = useState(false);

  const extractingEmbedLinkFromYouTubeLink = (userInputYouTubeLink) => {
    try {
      const urlParams = new URLSearchParams(new URL(userInputYouTubeLink).search);
      const videoId = urlParams.get("v");
      if (videoId) {
        setInvalidYouTubeLink(false);
        setCourseDetails({
          ...courseDetails,
          youtubeLink: `https://www.youtube.com/embed/${videoId}`,
        });
      } else {
        setInvalidYouTubeLink(true);
        setCourseDetails({ ...courseDetails, youtubeLink: "" });
      }
    } catch (error) {
      setInvalidYouTubeLink(true);
      setCourseDetails({ ...courseDetails, youtubeLink: "" });
    }
  };

  useEffect(() => {
    if (
      courseDetails.courseImage?.type === "image/png" ||
      courseDetails.courseImage?.type === "image/jpg" ||
      courseDetails.courseImage?.type === "image/jpeg"
    ) {
      setUploadFileStatus(true);
      setPreview(URL.createObjectURL(courseDetails.courseImage));
    } else if (courseDetails.courseImage) {
      setUploadFileStatus(false);
      setCourseDetails({ ...courseDetails, courseImage: "" });
    }
  }, [courseDetails.courseImage]);

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleClose = () => {
    setShow(false);
    setPreview("");
    setUploadFileStatus(false);
    setCourseDetails({
      title: "",
      author: "",
      description: "",
      courseImage: "",
      youtubeLink: "",
    });
  };

  const handleShow = () => setShow(true);



  const handleAddProject = async()=>{
    const {title,author,description,courseImage,youtubeLink} = courseDetails
    if(title && author && description && courseImage && youtubeLink){
      // api call
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("author",author)
      reqBody.append("description",description)
      reqBody.append("courseImage",courseImage)
      reqBody.append("youtubeLink",youtubeLink)

      const token = sessionStorage.getItem("token")
      if(token){
        const reqHeader = {
          "Content-Type" :"multipart/form-data",
          "Authorization" :  `Bearer ${token}`
        }
        // make api call
        try{
          const result = await addCourseAPI(reqBody,reqHeader)
          console.log(result);
          if(result.status==200){
            alert(`${result?.data?.title} added successfullyy..`)
            handleClose()
            // share result to view
            setAddCourseResponse(result)
          }else{
            if(result.response.status==406){
              alert(result.response.data)
            }
          }
          
        }catch(err){
          console.log(err);
          
        }
      }
    }else{
      alert("Fill completely")
    }
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className="btn btn-info">
        ADD COURSES
      </Button>

      <Modal size="lg" centered show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW COURSES</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setCourseDetails({ ...courseDetails, courseImage: e.target.files[0] })
                  }
                />
                <img
                  className="img-fluid ms-3"
                  height={"200px"}
                  src={preview || uploadImg}
                  alt="Course Thumbnail"
                />
              </label>
              {!uploadFileStatus && (
                <div className="text-warning fw-bolder mt-2">
                  Upload only JPEG, JPG, or PNG files!
                </div>
              )}
            </div>
            <div className="col-lg-8">
              <div className="mb-4">
                <input
                  type="text"
                  value={courseDetails.title}
                  onChange={(e) =>
                    setCourseDetails({ ...courseDetails, title: e.target.value })
                  }
                  className="form-control"
                  placeholder="Course Title"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={courseDetails.author}
                  onChange={(e) =>
                    setCourseDetails({ ...courseDetails, author: e.target.value })
                  }
                  className="form-control"
                  placeholder="Author"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={courseDetails.description}
                  onChange={(e) =>
                    setCourseDetails({ ...courseDetails, description: e.target.value })
                  }
                  className="form-control"
                  placeholder="Description"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  value={courseDetails.youtubeLink}
                  onChange={(e) => extractingEmbedLinkFromYouTubeLink(e.target.value)}
                  className={`form-control ${invalidYouTubeLink ? "is-invalid" : ""}`}
                  placeholder="YouTube Link"
                />
                {invalidYouTubeLink && (
                  <div className="invalid-feedback">
                    Please enter a valid YouTube link.
                  </div>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddProject} variant="primary" className="btn btn-info" >
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Add;
