import {
  Component,
  Host,
  State,
  Prop,
  Event,
  EventEmitter,
  h,
  JSX,
} from '@stencil/core'

@Component({
  tag: 'readr-annotation',
  styleUrl: 'readr-annotation.scss',
  scoped: true,
})
export class ReadrAnnotation {
  @Prop() text: string

  @State() shouldOpenAnnotation = false
  @Event() toggle: EventEmitter
  handleClick = (): void => {
    this.shouldOpenAnnotation = !this.shouldOpenAnnotation
    this.toggle.emit(this.shouldOpenAnnotation ? 'open' : 'close')
  }

  render(): JSX.Element {
    return (
      <Host class={this.shouldOpenAnnotation && 'open'}>
        <span class="annotated" onClick={this.handleClick}>
          <span>
            <slot />
          </span>

          <slot name="toggle"></slot>
        </span>

        {this.shouldOpenAnnotation && (
          <span class="annotation">{this.text}</span>
        )}
      </Host>
    )
  }
}
