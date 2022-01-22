import { useState } from "react";
import { useClient } from "./settings";
import { Grid, Button, Icon } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic'
import MicOffIcon from '@material-ui/icons/MicOff'
import VideocamIcon from '@material-ui/icons/Videocam'
import VideocamOffIcon from '@material-ui/icons/VideocamOff';
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
export default function Controls(props) {
    const client = useClient();
    const { tracks, setStart, setInCall } = props;
    const [trackState, setTarckState] = useState({ video: true, audio: true });

    const mute =async(type)=>{
        if(type==="audio"){
            await tracks[0].setEnabled(!trackState.audio);
            setTarckState((ps)=>{
                return {...ps,audio:!ps.audio}
            });
        }

        if(type==="audio"){
            await tracks[1].setEnabled(!trackState.video);
            setTarckState((ps)=>{
                return {...ps,video:!ps.video}
            })
        }
     
     

    }

    const leaveChanel=async()=>{
        await client.leave();
        client.removeAllListeners();
        tracks[0].close()
        tracks[1].close()
        setStart(false)
        setInCall(false)
    }
    return (

        <Grid container spacing={2} alignItems="center">

            <Grid item>
                <Button variant="contained" color={trackState.audio?"primary":"secondary"}
                onClick={()=>mute("video")}
                
                >
                {trackState.audio?<MicIcon/>:<MicOffIcon/>}

                </Button>
            </Grid>
            
            <Grid item>

            <Button variant="contained" color={trackState.video?"primary":"secondary"}
                onClick={()=>mute("video")}
                
                >
                {trackState.audio?<VideocamIcon/>:<VideocamOffIcon/>}

                </Button>
            </Grid>
            
            <Grid item>

            <Button variant="contained" color="default"
                onClick={()=>leaveChanel()}
                
                >
             Leave <ExitToAppIcon/>

                </Button>
            </Grid>
            
           
        </Grid>
    )

}
