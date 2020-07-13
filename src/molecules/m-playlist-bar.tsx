import { h, Host, Component } from "@stencil/core";

@Component({
    tag: 'm-playlist-bar',
    styleUrl: 'm-playlist-bar.css'
})
export class PlaylistBar {   
    
    render(){
        return (
            <Host class="PlaylistBar">
            <div class="container">
                <a-play-button></a-play-button>
            </div>
            </Host>
        )
    }
    
}