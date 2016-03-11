import ResponsiveVoice from 'libs/ResponsiveVoice'
import Voices from 'constants/Voices'

const responsiveVoice = new ResponsiveVoice()

const speakService = {
  say (phrase) {
    if (typeof phrase === 'string') {
      // phrase = ''
      responsiveVoice.speak(`${phrase} `, Voices.US_FEMALE, {
        pitch: 1, // 0 to 2
        rate: 0.6, // 0 to 1.5
        volume: 1, // 0 to 1
        onstart () {
          // console.log('Started')
        },
        onend () {
          // console.log('Ended')
        }
      })
    }
  }
}

export default speakService
