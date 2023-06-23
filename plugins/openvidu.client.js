import { OpenVidu } from "openvidu-browser";

export default defineNuxtPlugin(nuxtApp => {
    // now available on `nuxtApp.$injected`
    nuxtApp.provide('openVidu', () => new OpenVidu())
})