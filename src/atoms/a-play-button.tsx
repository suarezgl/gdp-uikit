import { Component, Prop, h, Host, Event, EventEmitter, Watch } from "@stencil/core";

@Component({
    tag: 'a-play-button',
    styleUrl: 'a-play-button.css',
})
export class PlayButton {
    
    @Prop({ reflect: false}) isDisable: boolean = false;
    @Prop() isLoading: boolean;
    @Prop() play: boolean = false;
    @Event() clicked: EventEmitter;


    render(){
       return (
        <Host class="PlayButton">
            <div class="play-button-outer" onClick={ ev => this.isClicked(ev) }>
                {this.play ?
                    <div class="stop-button"></div>:
                    <div class="play-button"></div>
                }
            </div>
        </Host>)
    }

    isClicked(_event: MouseEvent){
        if(!this.isDisable){
            this.play = !this.play
            this.clicked.emit(this.play);
        }
    }

    @Watch('isLoading')
    change(_value: boolean, _currentValue: boolean){
        
    }

}