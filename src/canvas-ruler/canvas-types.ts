import { ExtractPropTypes } from 'vue'
export const canvasProps = {
  scale: Number,
  ratio: Number,
  palette: Object,
  vertical: Boolean,
  start: Number,
  width: Number,
  height: Number,
  selectStart: Number,
  selectLength: Number
}
export type CanvasProps = ExtractPropTypes<typeof canvasProps>