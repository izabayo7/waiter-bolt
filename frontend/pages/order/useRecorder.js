import {useEffect, useState} from "react";
import axios from "axios";
import RequestService from "../../services/RequestService";

const useRecorder = () => {
    const [audioURL, setAudioURL] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);

    useEffect(() => {
        // Lazily obtain recorder first time we're recording.
        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then(setRecorder, console.error);
            }
            return;
        }

        // Manage recorder state.
        if (isRecording) {
            recorder.start();
        } else {
            recorder.stop();
        }

        // Obtain the audio when ready.
        const handleData = async e => {

            let data = new FormData();

            data.append('paris', -1000);
            data.append('power', 1000);
            data.append('parents', -1000);
            data.append('audio', e.data, "recording.wav");

            let jwt_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMywiZXhwIjoxNjQ4NDc5NDAxLjcyODc1Nn0.D6jHI64pb6Qbx8BnXvsVSEjO57_2WDHi92noobyTHX0'

            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                    'Authorization': 'Bearer ' + jwt_token,
                    'Access-Control-Allow-Origin': '*'
                },
            }
            const res = await axios.post("https://cors-anywhere.herokuapp.com/" + 'https://mbaza.dev.cndp.org.rw/deepspeech/api/api/v1/stt/http', data, config);
            console.log(res)
            if (res.data) {
                // res.data.message
                // setAudioURL(URL.createObjectURL(e.data));
                RequestService.sendOrder(res.data.message)
            }
        };

        recorder.addEventListener("dataavailable", handleData);
        return () => recorder.removeEventListener("dataavailable", handleData);
    }, [recorder, isRecording]);

    const startRecording = () => {
        setIsRecording(true);
    };

    const stopRecording = () => {
        setIsRecording(false);
    };

    return [audioURL, isRecording, startRecording, stopRecording];
};

async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({audio: true});
    return new MediaRecorder(stream);
}

export default useRecorder;
