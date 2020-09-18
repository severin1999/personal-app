import React, {  useRef, useEffect, useState } from 'react';
import * as faceapi from 'face-api.js';
import './About.scss'

const Video = () => {
    const videoRef = useRef(null);
    let video ;

    useEffect(() => {
        video  = videoRef.current;

        const startVideo = () => {
            navigator.getUserMedia(
                { video: {} },
                stream => video.srcObject = stream,
                err => console.error(err)
            )
        }
        Promise.all([
            faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
            faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
            faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
            faceapi.nets.faceExpressionNet.loadFromUri('/models')
        ])
        // .then(startVideo)
    }, []);

    const detectFace = () => {
        let canvas = faceapi.createCanvasFromMedia(video)
        document.getElementById('container').append(canvas)
        const displaySize = { width: video.width  , height: video.height }
        faceapi.matchDimensions(canvas, displaySize)
        setInterval(async () => {
          let detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
          const resizedDetections = faceapi.resizeResults(detections, displaySize)
          canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
          faceapi.draw.drawDetections(canvas, resizedDetections)
          faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
          faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
        }, 100)
    }

    return (
        <div className='video'>
            {/* <video ref={videoRef} width='900' height='800' autoPlay muted onPlay={detectFace} /> */}
        </div>
    )
}

export default Video