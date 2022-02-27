import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import RequestService from "../../services/RequestService";

const useRecorder = () => {
    const [discard, setDiscard] = useState(false);
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

            if (discard)
                return

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

            if (!res.status !== 200) {
                toast.error("Error while processing")
            }

            if (res.data) {
                console.log(res.data.message)
                // setDiscard(URL.createObjectURL(e.data));
                RequestService.sendOrder(res.data.message)
            }
        };

        recorder.addEventListener("dataavailable", handleData);
        return () => recorder.removeEventListener("dataavailable", handleData);
    }, [recorder, isRecording]);

    const startRecording = () => {
        setIsRecording(true);
        setDiscard(false)
    };
    const discardRecording = () => {
        setDiscard(true)
    }
    const stopRecording = () => {
        setIsRecording(false);
    };

    return [isRecording, discardRecording, startRecording, stopRecording];
};

async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
}

export default useRecorder;
