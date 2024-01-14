/// <reference types="vite/client" />
import { Daily } from './daily'
import '../scss/main.scss'

Object.defineProperty(window, 'Daily', { value: Daily })