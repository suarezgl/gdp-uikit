import { Component, h, Host, State, Listen } from "@stencil/core";

@Component({
    tag: 'o-video-player',
    styleUrl:'o-video-player.css'
})
export class VideoPlayer { 
    
    @State() isRunning: boolean = false;
    render(){
       return (
        <Host class="VideoPlayer">
           <div class="container">
               { this.isRunning ?
                <img src="https://media.giphy.com/media/F3JhKaucb9QqSF7bSS/giphy.gif"alt=""/> :
                <div class="stop"></div>
               }
               <m-playlist-bar></m-playlist-bar>            
            </div>
        </Host>
       ) 
    }

    @Listen('clicked')
    reproduction(_event: CustomEvent) { 
        this.isRunning = !_event.detail;
    }
}