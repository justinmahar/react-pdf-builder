import { Font, View } from '@react-pdf/renderer';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Fonts } from '../../components/fonts/Fonts';
import { ListItem } from '../../components/lists/ListItem';
import { UnorderedList } from '../../components/lists/UnorderedList';
import { Heading3 } from '../../components/typography/Heading3';
import { Paragraph } from '../../components/typography/Paragraph';
import { PDFStory } from '../parts/PDFStory';
import { Box } from '../../components/layout/Box';
import { Card } from '../../components/card/Card';
import { CardBody } from '../../components/card/CardBody';

const StoryComponent = (props: { emojiSource: any; showFullList: boolean; sourceName: string }) => {
  Font.registerEmojiSource(props.emojiSource);
  return (
    <PDFStory key={props.emojiSource}>
      <Heading3 rule>{props.sourceName}</Heading3>
      <Card swatch="primary">
        <CardBody>
          <Box direction="x" gap={15} style={{ alignItems: 'center' }}>
            <Paragraph style={{ width: 40, fontSize: 36, marginBottom: 0 }}>ℹ️</Paragraph>
            <Paragraph style={{ width: '100%', marginBottom: 0 }}>
              Note: You must reload the page to view different emoji sources.
            </Paragraph>
          </Box>
        </CardBody>
      </Card>

      {props.showFullList && (
        <UnorderedList style={{ fontSize: 22 }}>
          <ListItem>😀 E1.0 grinning face</ListItem>
          <ListItem>😃 E0.6 grinning face with big eyes</ListItem>
          <ListItem>😄 E0.6 grinning face with smiling eyes</ListItem>
          <ListItem>😁 E0.6 beaming face with smiling eyes</ListItem>
          <ListItem>😆 E0.6 grinning squinting face</ListItem>
          <ListItem>😅 E0.6 grinning face with sweat</ListItem>
          <ListItem>🤣 E3.0 rolling on the floor laughing</ListItem>
          <ListItem>😂 E0.6 face with tears of joy</ListItem>
          <ListItem>🙂 E1.0 slightly smiling face</ListItem>
          <ListItem>🙃 E1.0 upside-down face</ListItem>
          <ListItem>🫠 E14.0 melting face</ListItem>
          <ListItem>😉 E0.6 winking face</ListItem>
          <ListItem>😊 E0.6 smiling face with smiling eyes</ListItem>
          <ListItem>😇 E1.0 smiling face with halo</ListItem>
          <ListItem>🥰 E11.0 smiling face with hearts</ListItem>
          <ListItem>😍 E0.6 smiling face with heart-eyes</ListItem>
          <ListItem>🤩 E5.0 star-struck</ListItem>
          <ListItem>😘 E0.6 face blowing a kiss</ListItem>
          <ListItem>😗 E1.0 kissing face</ListItem>
          <ListItem>☺️ E0.6 smiling face</ListItem>
          <ListItem>😚 E0.6 kissing face with closed eyes</ListItem>
          <ListItem>😙 E1.0 kissing face with smiling eyes</ListItem>
          <ListItem>🥲 E13.0 smiling face with tear</ListItem>
          <ListItem>😋 E0.6 face savoring food</ListItem>
          <ListItem>😛 E1.0 face with tongue</ListItem>
          <ListItem>😜 E0.6 winking face with tongue</ListItem>
          <ListItem>🤪 E5.0 zany face</ListItem>
          <ListItem>😝 E0.6 squinting face with tongue</ListItem>
          <ListItem>🤑 E1.0 money-mouth face</ListItem>
          <ListItem>🤗 E1.0 smiling face with open hands</ListItem>
          <ListItem>🤭 E5.0 face with hand over mouth</ListItem>
          <ListItem>🫢 E14.0 face with open eyes and hand over mouth</ListItem>
          <ListItem>🫣 E14.0 face with peeking eye</ListItem>
          <ListItem>🤫 E5.0 shushing face</ListItem>
          <ListItem>🤔 E1.0 thinking face</ListItem>
          <ListItem>🫡 E14.0 saluting face</ListItem>
          <ListItem>🤐 E1.0 zipper-mouth face</ListItem>
          <ListItem>🤨 E5.0 face with raised eyebrow</ListItem>
          <ListItem>😐 E0.7 neutral face</ListItem>
          <ListItem>😑 E1.0 expressionless face</ListItem>
          <ListItem>😶 E1.0 face without mouth</ListItem>
          <ListItem>🫥 E14.0 dotted line face</ListItem>
          <ListItem>😶‍🌫️ E13.1 face in clouds</ListItem>
          <ListItem>😏 E0.6 smirking face</ListItem>
          <ListItem>😒 E0.6 unamused face</ListItem>
          <ListItem>🙄 E1.0 face with rolling eyes</ListItem>
          <ListItem>😬 E1.0 grimacing face</ListItem>
          <ListItem>😮‍💨 E13.1 face exhaling</ListItem>
          <ListItem>🤥 E3.0 lying face</ListItem>
          <ListItem>😌 E0.6 relieved face</ListItem>
          <ListItem>😔 E0.6 pensive face</ListItem>
          <ListItem>😪 E0.6 sleepy face</ListItem>
          <ListItem>🤤 E3.0 drooling face</ListItem>
          <ListItem>😴 E1.0 sleeping face</ListItem>
          <ListItem>😷 E0.6 face with medical mask</ListItem>
          <ListItem>🤒 E1.0 face with thermometer</ListItem>
          <ListItem>🤕 E1.0 face with head-bandage</ListItem>
          <ListItem>🤢 E3.0 nauseated face</ListItem>
          <ListItem>🤮 E5.0 face vomiting</ListItem>
          <ListItem>🤧 E3.0 sneezing face</ListItem>
          <ListItem>🥵 E11.0 hot face</ListItem>
          <ListItem>🥶 E11.0 cold face</ListItem>
          <ListItem>🥴 E11.0 woozy face</ListItem>
          <ListItem>😵 E0.6 face with crossed-out eyes</ListItem>
          <ListItem>😵‍💫 E13.1 face with spiral eyes</ListItem>
          <ListItem>🤯 E5.0 exploding head</ListItem>
          <ListItem>🤠 E3.0 cowboy hat face</ListItem>
          <ListItem>🥳 E11.0 partying face</ListItem>
          <ListItem>🥸 E13.0 disguised face</ListItem>
          <ListItem>😎 E1.0 smiling face with sunglasses</ListItem>
          <ListItem>🤓 E1.0 nerd face</ListItem>
          <ListItem>🧐 E5.0 face with monocle</ListItem>
          <ListItem>😕 E1.0 confused face</ListItem>
          <ListItem>🫤 E14.0 face with diagonal mouth</ListItem>
          <ListItem>😟 E1.0 worried face</ListItem>
          <ListItem>🙁 E1.0 slightly frowning face</ListItem>
          <ListItem>☹️ E0.7 frowning face</ListItem>
          <ListItem>😮 E1.0 face with open mouth</ListItem>
          <ListItem>😯 E1.0 hushed face</ListItem>
          <ListItem>😲 E0.6 astonished face</ListItem>
          <ListItem>😳 E0.6 flushed face</ListItem>
          <ListItem>🥺 E11.0 pleading face</ListItem>
          <ListItem>🥹 E14.0 face holding back tears</ListItem>
          <ListItem>😦 E1.0 frowning face with open mouth</ListItem>
          <ListItem>😧 E1.0 anguished face</ListItem>
          <ListItem>😨 E0.6 fearful face</ListItem>
          <ListItem>😰 E0.6 anxious face with sweat</ListItem>
          <ListItem>😥 E0.6 sad but relieved face</ListItem>
          <ListItem>😢 E0.6 crying face</ListItem>
          <ListItem>😭 E0.6 loudly crying face</ListItem>
          <ListItem>😱 E0.6 face screaming in fear</ListItem>
          <ListItem>😖 E0.6 confounded face</ListItem>
          <ListItem>😣 E0.6 persevering face</ListItem>
          <ListItem>😞 E0.6 disappointed face</ListItem>
          <ListItem>😓 E0.6 downcast face with sweat</ListItem>
          <ListItem>😩 E0.6 weary face</ListItem>
          <ListItem>😫 E0.6 tired face</ListItem>
          <ListItem>🥱 E12.0 yawning face</ListItem>
          <ListItem>😤 E0.6 face with steam from nose</ListItem>
          <ListItem>😡 E0.6 pouting face</ListItem>
          <ListItem>😠 E0.6 angry face</ListItem>
          <ListItem>🤬 E5.0 face with symbols on mouth</ListItem>
          <ListItem>😈 E1.0 smiling face with horns</ListItem>
          <ListItem>👿 E0.6 angry face with horns</ListItem>
          <ListItem>💀 E0.6 skull</ListItem>
          <ListItem>☠️ E1.0 skull and crossbones</ListItem>
          <ListItem>💩 E0.6 pile of poo</ListItem>
          <ListItem>🤡 E3.0 clown face</ListItem>
          <ListItem>👹 E0.6 ogre</ListItem>
          <ListItem>👺 E0.6 goblin</ListItem>
          <ListItem>👻 E0.6 ghost</ListItem>
          <ListItem>👽 E0.6 alien</ListItem>
          <ListItem>👾 E0.6 alien monster</ListItem>
          <ListItem>🤖 E1.0 robot</ListItem>
          <ListItem>😺 E0.6 grinning cat</ListItem>
          <ListItem>😸 E0.6 grinning cat with smiling eyes</ListItem>
          <ListItem>😹 E0.6 cat with tears of joy</ListItem>
          <ListItem>😻 E0.6 smiling cat with heart-eyes</ListItem>
          <ListItem>😼 E0.6 cat with wry smile</ListItem>
          <ListItem>😽 E0.6 kissing cat</ListItem>
          <ListItem>🙀 E0.6 weary cat</ListItem>
          <ListItem>😿 E0.6 crying cat</ListItem>
          <ListItem>😾 E0.6 pouting cat</ListItem>
          <ListItem>🙈 E0.6 see-no-evil monkey</ListItem>
          <ListItem>🙉 E0.6 hear-no-evil monkey</ListItem>
          <ListItem>🙊 E0.6 speak-no-evil monkey</ListItem>
          <ListItem>💋 E0.6 kiss mark</ListItem>
          <ListItem>💌 E0.6 love letter</ListItem>
          <ListItem>💘 E0.6 heart with arrow</ListItem>
          <ListItem>💝 E0.6 heart with ribbon</ListItem>
          <ListItem>💖 E0.6 sparkling heart</ListItem>
          <ListItem>💗 E0.6 growing heart</ListItem>
          <ListItem>💓 E0.6 beating heart</ListItem>
          <ListItem>💞 E0.6 revolving hearts</ListItem>
          <ListItem>💕 E0.6 two hearts</ListItem>
          <ListItem>💟 E0.6 heart decoration</ListItem>
          <ListItem>❣️ E1.0 heart exclamation</ListItem>
          <ListItem>💔 E0.6 broken heart</ListItem>
          <ListItem>❤️‍🔥 E13.1 heart on fire</ListItem>
          <ListItem>❤️‍🩹 E13.1 mending heart</ListItem>
          <ListItem>❤️ E0.6 red heart</ListItem>
          <ListItem>🧡 E5.0 orange heart</ListItem>
          <ListItem>💛 E0.6 yellow heart</ListItem>
          <ListItem>💚 E0.6 green heart</ListItem>
          <ListItem>💙 E0.6 blue heart</ListItem>
          <ListItem>💜 E0.6 purple heart</ListItem>
          <ListItem>🤎 E12.0 brown heart</ListItem>
          <ListItem>🖤 E3.0 black heart</ListItem>
          <ListItem>🤍 E12.0 white heart</ListItem>
          <ListItem>💯 E0.6 hundred points</ListItem>
          <ListItem>💢 E0.6 anger symbol</ListItem>
          <ListItem>💥 E0.6 collision</ListItem>
          <ListItem>💫 E0.6 dizzy</ListItem>
          <ListItem>💦 E0.6 sweat droplets</ListItem>
          <ListItem>💨 E0.6 dashing away</ListItem>
          <ListItem>🕳️ E0.7 hole</ListItem>
          <ListItem>💣 E0.6 bomb</ListItem>
          <ListItem>💬 E0.6 speech balloon</ListItem>
          <ListItem>👁️‍🗨️ E2.0 eye in speech bubble</ListItem>
          <ListItem>🗨️ E2.0 left speech bubble</ListItem>
          <ListItem>🗯️ E0.7 right anger bubble</ListItem>
          <ListItem>💭 E1.0 thought balloon</ListItem>
          <ListItem>💤 E0.6 zzz</ListItem>
          <ListItem>👋 E0.6 waving hand</ListItem>
          <ListItem>🤚 E3.0 raised back of hand</ListItem>
          <ListItem>🖐️ E0.7 hand with fingers splayed</ListItem>
          <ListItem>✋ E0.6 raised hand</ListItem>
          <ListItem>🖖 E1.0 vulcan salute</ListItem>
          <ListItem>🫱 E14.0 rightwards hand</ListItem>
          <ListItem>🫲 E14.0 leftwards hand</ListItem>
          <ListItem>🫳 E14.0 palm down hand</ListItem>
          <ListItem>🫴 E14.0 palm up hand</ListItem>
          <ListItem>👌 E0.6 OK hand</ListItem>
          <ListItem>🤌 E13.0 pinched fingers</ListItem>
          <ListItem>🤏 E12.0 pinching hand</ListItem>
          <ListItem>✌️ E0.6 victory hand</ListItem>
          <ListItem>🤞 E3.0 crossed fingers</ListItem>
          <ListItem>🫰 E14.0 hand with index finger and thumb crossed</ListItem>
          <ListItem>🤟 E5.0 love-you gesture</ListItem>
          <ListItem>🤘 E1.0 sign of the horns</ListItem>
          <ListItem>🤙 E3.0 call me hand</ListItem>
          <ListItem>👈 E0.6 backhand index pointing left</ListItem>
          <ListItem>👉 E0.6 backhand index pointing right</ListItem>
          <ListItem>👆 E0.6 backhand index pointing up</ListItem>
          <ListItem>🖕 E1.0 middle finger</ListItem>
          <ListItem>👇 E0.6 backhand index pointing down</ListItem>
          <ListItem>☝️ E0.6 index pointing up</ListItem>
          <ListItem>🫵 E14.0 index pointing at the viewer</ListItem>
          <ListItem>👍 E0.6 thumbs up</ListItem>
          <ListItem>👎 E0.6 thumbs down</ListItem>
          <ListItem>✊ E0.6 raised fist</ListItem>
          <ListItem>👊 E0.6 oncoming fist</ListItem>
          <ListItem>🤛 E3.0 left-facing fist</ListItem>
          <ListItem>🤜 E3.0 right-facing fist</ListItem>
          <ListItem>👏 E0.6 clapping hands</ListItem>
          <ListItem>🙌 E0.6 raising hands</ListItem>
          <ListItem>🫶 E14.0 heart hands</ListItem>
          <ListItem>👐 E0.6 open hands</ListItem>
          <ListItem>🤲 E5.0 palms up together</ListItem>
          <ListItem>🤝 E3.0 handshake</ListItem>
          <ListItem>🙏 E0.6 folded hands</ListItem>
          <ListItem>✍️ E0.7 writing hand</ListItem>
          <ListItem>💅 E0.6 nail polish</ListItem>
          <ListItem>🤳 E3.0 selfie</ListItem>
          <ListItem>💪 E0.6 flexed biceps</ListItem>
          <ListItem>🦾 E12.0 mechanical arm</ListItem>
          <ListItem>🦿 E12.0 mechanical leg</ListItem>
          <ListItem>🦵 E11.0 leg</ListItem>
          <ListItem>🦶 E11.0 foot</ListItem>
          <ListItem>👂 E0.6 ear</ListItem>
          <ListItem>🦻 E12.0 ear with hearing aid</ListItem>
          <ListItem>👃 E0.6 nose</ListItem>
          <ListItem>🧠 E5.0 brain</ListItem>
          <ListItem>🫀 E13.0 anatomical heart</ListItem>
          <ListItem>🫁 E13.0 lungs</ListItem>
          <ListItem>🦷 E11.0 tooth</ListItem>
          <ListItem>🦴 E11.0 bone</ListItem>
          <ListItem>👀 E0.6 eyes</ListItem>
          <ListItem>👁️ E0.7 eye</ListItem>
          <ListItem>👅 E0.6 tongue</ListItem>
          <ListItem>👄 E0.6 mouth</ListItem>
          <ListItem>🫦 E14.0 biting lip</ListItem>
          <ListItem>👶 E0.6 baby</ListItem>
          <ListItem>🧒 E5.0 child</ListItem>
          <ListItem>👦 E0.6 boy</ListItem>
          <ListItem>👧 E0.6 girl</ListItem>
          <ListItem>🧑 E5.0 person</ListItem>
          <ListItem>👱 E0.6 person: blond hair</ListItem>
          <ListItem>👨 E0.6 man</ListItem>
          <ListItem>🧔 E5.0 person: beard</ListItem>
          <ListItem>🧔‍♂️ E13.1 man: beard</ListItem>
          <ListItem>🧔‍♀️ E13.1 woman: beard</ListItem>
          <ListItem>👨‍🦰 E11.0 man: red hair</ListItem>
          <ListItem>👨‍🦱 E11.0 man: curly hair</ListItem>
          <ListItem>👨‍🦳 E11.0 man: white hair</ListItem>
          <ListItem>👨‍🦲 E11.0 man: bald</ListItem>
          <ListItem>👩 E0.6 woman</ListItem>
          <ListItem>👩‍🦰 E11.0 woman: red hair</ListItem>
          <ListItem>🧑‍🦰 E12.1 person: red hair</ListItem>
          <ListItem>👩‍🦱 E11.0 woman: curly hair</ListItem>
          <ListItem>🧑‍🦱 E12.1 person: curly hair</ListItem>
          <ListItem>👩‍🦳 E11.0 woman: white hair</ListItem>
          <ListItem>🧑‍🦳 E12.1 person: white hair</ListItem>
          <ListItem>👩‍🦲 E11.0 woman: bald</ListItem>
          <ListItem>🧑‍🦲 E12.1 person: bald</ListItem>
          <ListItem>👱‍♀️ E4.0 woman: blond hair</ListItem>
          <ListItem>👱‍♂️ E4.0 man: blond hair</ListItem>
          <ListItem>🧓 E5.0 older person</ListItem>
          <ListItem>👴 E0.6 old man</ListItem>
          <ListItem>👵 E0.6 old woman</ListItem>
          <ListItem>🙍 E0.6 person frowning</ListItem>
          <ListItem>🙍‍♂️ E4.0 man frowning</ListItem>
          <ListItem>🙍‍♀️ E4.0 woman frowning</ListItem>
          <ListItem>🙎 E0.6 person pouting</ListItem>
          <ListItem>🙎‍♂️ E4.0 man pouting</ListItem>
          <ListItem>🙎‍♀️ E4.0 woman pouting</ListItem>
          <ListItem>🙅 E0.6 person gesturing NO</ListItem>
          <ListItem>🙅‍♂️ E4.0 man gesturing NO</ListItem>
          <ListItem>🙅‍♀️ E4.0 woman gesturing NO</ListItem>
          <ListItem>🙆 E0.6 person gesturing OK</ListItem>
          <ListItem>🙆‍♂️ E4.0 man gesturing OK</ListItem>
          <ListItem>🙆‍♀️ E4.0 woman gesturing OK</ListItem>
          <ListItem>💁 E0.6 person tipping hand</ListItem>
          <ListItem>💁‍♂️ E4.0 man tipping hand</ListItem>
          <ListItem>💁‍♀️ E4.0 woman tipping hand</ListItem>
          <ListItem>🙋 E0.6 person raising hand</ListItem>
          <ListItem>🙋‍♂️ E4.0 man raising hand</ListItem>
          <ListItem>🙋‍♀️ E4.0 woman raising hand</ListItem>
          <ListItem>🧏 E12.0 deaf person</ListItem>
          <ListItem>🧏‍♂️ E12.0 deaf man</ListItem>
          <ListItem>🧏‍♀️ E12.0 deaf woman</ListItem>
          <ListItem>🙇 E0.6 person bowing</ListItem>
          <ListItem>🙇‍♂️ E4.0 man bowing</ListItem>
          <ListItem>🙇‍♀️ E4.0 woman bowing</ListItem>
          <ListItem>🤦 E3.0 person facepalming</ListItem>
          <ListItem>🤦‍♂️ E4.0 man facepalming</ListItem>
          <ListItem>🤦‍♀️ E4.0 woman facepalming</ListItem>
          <ListItem>🤷 E3.0 person shrugging</ListItem>
          <ListItem>🤷‍♂️ E4.0 man shrugging</ListItem>
          <ListItem>🤷‍♀️ E4.0 woman shrugging</ListItem>
          <ListItem>🧑‍⚕️ E12.1 health worker</ListItem>
          <ListItem>👨‍⚕️ E4.0 man health worker</ListItem>
          <ListItem>👩‍⚕️ E4.0 woman health worker</ListItem>
          <ListItem>🧑‍🎓 E12.1 student</ListItem>
          <ListItem>👨‍🎓 E4.0 man student</ListItem>
          <ListItem>👩‍🎓 E4.0 woman student</ListItem>
          <ListItem>🧑‍🏫 E12.1 teacher</ListItem>
          <ListItem>👨‍🏫 E4.0 man teacher</ListItem>
          <ListItem>👩‍🏫 E4.0 woman teacher</ListItem>
          <ListItem>🧑‍⚖️ E12.1 judge</ListItem>
          <ListItem>👨‍⚖️ E4.0 man judge</ListItem>
          <ListItem>👩‍⚖️ E4.0 woman judge</ListItem>
          <ListItem>🧑‍🌾 E12.1 farmer</ListItem>
          <ListItem>👨‍🌾 E4.0 man farmer</ListItem>
          <ListItem>👩‍🌾 E4.0 woman farmer</ListItem>
          <ListItem>🧑‍🍳 E12.1 cook</ListItem>
          <ListItem>👨‍🍳 E4.0 man cook</ListItem>
          <ListItem>👩‍🍳 E4.0 woman cook</ListItem>
          <ListItem>🧑‍🔧 E12.1 mechanic</ListItem>
          <ListItem>👨‍🔧 E4.0 man mechanic</ListItem>
          <ListItem>👩‍🔧 E4.0 woman mechanic</ListItem>
          <ListItem>🧑‍🏭 E12.1 factory worker</ListItem>
          <ListItem>👨‍🏭 E4.0 man factory worker</ListItem>
          <ListItem>👩‍🏭 E4.0 woman factory worker</ListItem>
          <ListItem>🧑‍💼 E12.1 office worker</ListItem>
          <ListItem>👨‍💼 E4.0 man office worker</ListItem>
          <ListItem>👩‍💼 E4.0 woman office worker</ListItem>
          <ListItem>🧑‍🔬 E12.1 scientist</ListItem>
          <ListItem>👨‍🔬 E4.0 man scientist</ListItem>
          <ListItem>👩‍🔬 E4.0 woman scientist</ListItem>
          <ListItem>🧑‍💻 E12.1 technologist</ListItem>
          <ListItem>👨‍💻 E4.0 man technologist</ListItem>
          <ListItem>👩‍💻 E4.0 woman technologist</ListItem>
          <ListItem>🧑‍🎤 E12.1 singer</ListItem>
          <ListItem>👨‍🎤 E4.0 man singer</ListItem>
          <ListItem>👩‍🎤 E4.0 woman singer</ListItem>
          <ListItem>🧑‍🎨 E12.1 artist</ListItem>
          <ListItem>👨‍🎨 E4.0 man artist</ListItem>
          <ListItem>👩‍🎨 E4.0 woman artist</ListItem>
          <ListItem>🧑‍✈️ E12.1 pilot</ListItem>
          <ListItem>👨‍✈️ E4.0 man pilot</ListItem>
          <ListItem>👩‍✈️ E4.0 woman pilot</ListItem>
          <ListItem>🧑‍🚀 E12.1 astronaut</ListItem>
          <ListItem>👨‍🚀 E4.0 man astronaut</ListItem>
          <ListItem>👩‍🚀 E4.0 woman astronaut</ListItem>
          <ListItem>🧑‍🚒 E12.1 firefighter</ListItem>
          <ListItem>👨‍🚒 E4.0 man firefighter</ListItem>
          <ListItem>👩‍🚒 E4.0 woman firefighter</ListItem>
          <ListItem>👮 E0.6 police officer</ListItem>
          <ListItem>👮‍♂️ E4.0 man police officer</ListItem>
          <ListItem>👮‍♀️ E4.0 woman police officer</ListItem>
          <ListItem>🕵️ E0.7 detective</ListItem>
          <ListItem>🕵️‍♂️ E4.0 man detective</ListItem>
          <ListItem>🕵️‍♀️ E4.0 woman detective</ListItem>
          <ListItem>💂 E0.6 guard</ListItem>
          <ListItem>💂‍♂️ E4.0 man guard</ListItem>
          <ListItem>💂‍♀️ E4.0 woman guard</ListItem>
          <ListItem>🥷 E13.0 ninja</ListItem>
          <ListItem>👷 E0.6 construction worker</ListItem>
          <ListItem>👷‍♂️ E4.0 man construction worker</ListItem>
          <ListItem>👷‍♀️ E4.0 woman construction worker</ListItem>
          <ListItem>🫅 E14.0 person with crown</ListItem>
          <ListItem>🤴 E3.0 prince</ListItem>
          <ListItem>👸 E0.6 princess</ListItem>
          <ListItem>👳 E0.6 person wearing turban</ListItem>
          <ListItem>👳‍♂️ E4.0 man wearing turban</ListItem>
          <ListItem>👳‍♀️ E4.0 woman wearing turban</ListItem>
          <ListItem>👲 E0.6 person with skullcap</ListItem>
          <ListItem>🧕 E5.0 woman with headscarf</ListItem>
          <ListItem>🤵 E3.0 person in tuxedo</ListItem>
          <ListItem>🤵‍♂️ E13.0 man in tuxedo</ListItem>
          <ListItem>🤵‍♀️ E13.0 woman in tuxedo</ListItem>
          <ListItem>👰 E0.6 person with veil</ListItem>
          <ListItem>👰‍♂️ E13.0 man with veil</ListItem>
          <ListItem>👰‍♀️ E13.0 woman with veil</ListItem>
          <ListItem>🤰 E3.0 pregnant woman</ListItem>
          <ListItem>🫃 E14.0 pregnant man</ListItem>
          <ListItem>🫄 E14.0 pregnant person</ListItem>
          <ListItem>🤱 E5.0 breast-feeding</ListItem>
          <ListItem>👩‍🍼 E13.0 woman feeding baby</ListItem>
          <ListItem>👨‍🍼 E13.0 man feeding baby</ListItem>
          <ListItem>🧑‍🍼 E13.0 person feeding baby</ListItem>
          <ListItem>👼 E0.6 baby angel</ListItem>
          <ListItem>🎅 E0.6 Santa Claus</ListItem>
          <ListItem>🤶 E3.0 Mrs. Claus</ListItem>
          <ListItem>🧑‍🎄 E13.0 mx claus</ListItem>
          <ListItem>🦸 E11.0 superhero</ListItem>
          <ListItem>🦸‍♂️ E11.0 man superhero</ListItem>
          <ListItem>🦸‍♀️ E11.0 woman superhero</ListItem>
          <ListItem>🦹 E11.0 supervillain</ListItem>
          <ListItem>🦹‍♂️ E11.0 man supervillain</ListItem>
          <ListItem>🦹‍♀️ E11.0 woman supervillain</ListItem>
          <ListItem>🧙 E5.0 mage</ListItem>
          <ListItem>🧙‍♂️ E5.0 man mage</ListItem>
          <ListItem>🧙‍♀️ E5.0 woman mage</ListItem>
          <ListItem>🧚 E5.0 fairy</ListItem>
          <ListItem>🧚‍♂️ E5.0 man fairy</ListItem>
          <ListItem>🧚‍♀️ E5.0 woman fairy</ListItem>
          <ListItem>🧛 E5.0 vampire</ListItem>
          <ListItem>🧛‍♂️ E5.0 man vampire</ListItem>
          <ListItem>🧛‍♀️ E5.0 woman vampire</ListItem>
          <ListItem>🧜 E5.0 merperson</ListItem>
          <ListItem>🧜‍♂️ E5.0 merman</ListItem>
          <ListItem>🧜‍♀️ E5.0 mermaid</ListItem>
          <ListItem>🧝 E5.0 elf</ListItem>
          <ListItem>🧝‍♂️ E5.0 man elf</ListItem>
          <ListItem>🧝‍♀️ E5.0 woman elf</ListItem>
          <ListItem>🧞 E5.0 genie</ListItem>
          <ListItem>🧞‍♂️ E5.0 man genie</ListItem>
          <ListItem>🧞‍♀️ E5.0 woman genie</ListItem>
          <ListItem>🧟 E5.0 zombie</ListItem>
          <ListItem>🧟‍♂️ E5.0 man zombie</ListItem>
          <ListItem>🧟‍♀️ E5.0 woman zombie</ListItem>
          <ListItem>🧌 E14.0 troll</ListItem>
          <ListItem>💆 E0.6 person getting massage</ListItem>
          <ListItem>💆‍♂️ E4.0 man getting massage</ListItem>
          <ListItem>💆‍♀️ E4.0 woman getting massage</ListItem>
          <ListItem>💇 E0.6 person getting haircut</ListItem>
          <ListItem>💇‍♂️ E4.0 man getting haircut</ListItem>
          <ListItem>💇‍♀️ E4.0 woman getting haircut</ListItem>
          <ListItem>🚶 E0.6 person walking</ListItem>
          <ListItem>🚶‍♂️ E4.0 man walking</ListItem>
          <ListItem>🚶‍♀️ E4.0 woman walking</ListItem>
          <ListItem>🧍 E12.0 person standing</ListItem>
          <ListItem>🧍‍♂️ E12.0 man standing</ListItem>
          <ListItem>🧍‍♀️ E12.0 woman standing</ListItem>
          <ListItem>🧎 E12.0 person kneeling</ListItem>
          <ListItem>🧎‍♂️ E12.0 man kneeling</ListItem>
          <ListItem>🧎‍♀️ E12.0 woman kneeling</ListItem>
          <ListItem>🧑‍🦯 E12.1 person with white cane</ListItem>
          <ListItem>👨‍🦯 E12.0 man with white cane</ListItem>
          <ListItem>👩‍🦯 E12.0 woman with white cane</ListItem>
          <ListItem>🧑‍🦼 E12.1 person in motorized wheelchair</ListItem>
          <ListItem>👨‍🦼 E12.0 man in motorized wheelchair</ListItem>
          <ListItem>👩‍🦼 E12.0 woman in motorized wheelchair</ListItem>
          <ListItem>🧑‍🦽 E12.1 person in manual wheelchair</ListItem>
          <ListItem>👨‍🦽 E12.0 man in manual wheelchair</ListItem>
          <ListItem>👩‍🦽 E12.0 woman in manual wheelchair</ListItem>
          <ListItem>🏃 E0.6 person running</ListItem>
          <ListItem>🏃‍♂️ E4.0 man running</ListItem>
          <ListItem>🏃‍♀️ E4.0 woman running</ListItem>
          <ListItem>💃 E0.6 woman dancing</ListItem>
          <ListItem>🕺 E3.0 man dancing</ListItem>
          <ListItem>🕴️ E0.7 person in suit levitating</ListItem>
          <ListItem>👯 E0.6 people with bunny ears</ListItem>
          <ListItem>👯‍♂️ E4.0 men with bunny ears</ListItem>
          <ListItem>👯‍♀️ E4.0 women with bunny ears</ListItem>
          <ListItem>🧖 E5.0 person in steamy room</ListItem>
          <ListItem>🧖‍♂️ E5.0 man in steamy room</ListItem>
          <ListItem>🧖‍♀️ E5.0 woman in steamy room</ListItem>
          <ListItem>🧗 E5.0 person climbing</ListItem>
          <ListItem>🧗‍♂️ E5.0 man climbing</ListItem>
          <ListItem>🧗‍♀️ E5.0 woman climbing</ListItem>
          <ListItem>🤺 E3.0 person fencing</ListItem>
          <ListItem>🏇 E1.0 horse racing</ListItem>
          <ListItem>⛷️ E0.7 skier</ListItem>
          <ListItem>🏂 E0.6 snowboarder</ListItem>
          <ListItem>🏌️ E0.7 person golfing</ListItem>
          <ListItem>🏌️‍♂️ E4.0 man golfing</ListItem>
          <ListItem>🏌️‍♀️ E4.0 woman golfing</ListItem>
          <ListItem>🏄 E0.6 person surfing</ListItem>
          <ListItem>🏄‍♂️ E4.0 man surfing</ListItem>
          <ListItem>🏄‍♀️ E4.0 woman surfing</ListItem>
          <ListItem>🚣 E1.0 person rowing boat</ListItem>
          <ListItem>🚣‍♂️ E4.0 man rowing boat</ListItem>
          <ListItem>🚣‍♀️ E4.0 woman rowing boat</ListItem>
          <ListItem>🏊 E0.6 person swimming</ListItem>
          <ListItem>🏊‍♂️ E4.0 man swimming</ListItem>
          <ListItem>🏊‍♀️ E4.0 woman swimming</ListItem>
          <ListItem>⛹️ E0.7 person bouncing ball</ListItem>
          <ListItem>⛹️‍♂️ E4.0 man bouncing ball</ListItem>
          <ListItem>⛹️‍♀️ E4.0 woman bouncing ball</ListItem>
          <ListItem>🏋️ E0.7 person lifting weights</ListItem>
          <ListItem>🏋️‍♂️ E4.0 man lifting weights</ListItem>
          <ListItem>🏋️‍♀️ E4.0 woman lifting weights</ListItem>
          <ListItem>🚴 E1.0 person biking</ListItem>
          <ListItem>🚴‍♂️ E4.0 man biking</ListItem>
          <ListItem>🚴‍♀️ E4.0 woman biking</ListItem>
          <ListItem>🚵 E1.0 person mountain biking</ListItem>
          <ListItem>🚵‍♂️ E4.0 man mountain biking</ListItem>
          <ListItem>🚵‍♀️ E4.0 woman mountain biking</ListItem>
          <ListItem>🤸 E3.0 person cartwheeling</ListItem>
          <ListItem>🤸‍♂️ E4.0 man cartwheeling</ListItem>
          <ListItem>🤸‍♀️ E4.0 woman cartwheeling</ListItem>
          <ListItem>🤼 E3.0 people wrestling</ListItem>
          <ListItem>🤼‍♂️ E4.0 men wrestling</ListItem>
          <ListItem>🤼‍♀️ E4.0 women wrestling</ListItem>
          <ListItem>🤽 E3.0 person playing water polo</ListItem>
          <ListItem>🤽‍♂️ E4.0 man playing water polo</ListItem>
          <ListItem>🤽‍♀️ E4.0 woman playing water polo</ListItem>
          <ListItem>🤾 E3.0 person playing handball</ListItem>
          <ListItem>🤾‍♂️ E4.0 man playing handball</ListItem>
          <ListItem>🤾‍♀️ E4.0 woman playing handball</ListItem>
          <ListItem>🤹 E3.0 person juggling</ListItem>
          <ListItem>🤹‍♂️ E4.0 man juggling</ListItem>
          <ListItem>🤹‍♀️ E4.0 woman juggling</ListItem>
          <ListItem>🧘 E5.0 person in lotus position</ListItem>
          <ListItem>🧘‍♂️ E5.0 man in lotus position</ListItem>
          <ListItem>🧘‍♀️ E5.0 woman in lotus position</ListItem>
          <ListItem>🛀 E0.6 person taking bath</ListItem>
          <ListItem>🛌 E1.0 person in bed</ListItem>
          <ListItem>🧑‍🤝‍🧑 E12.0 people holding hands</ListItem>
          <ListItem>👭 E1.0 women holding hands</ListItem>
          <ListItem>👫 E0.6 woman and man holding hands</ListItem>
          <ListItem>👬 E1.0 men holding hands</ListItem>
          <ListItem>💏 E0.6 kiss</ListItem>
          <ListItem>👩‍❤️‍💋‍👨 E2.0 kiss: woman, man</ListItem>
          <ListItem>👨‍❤️‍💋‍👨 E2.0 kiss: man, man</ListItem>
          <ListItem>👩‍❤️‍💋‍👩 E2.0 kiss: woman, woman</ListItem>
          <ListItem>💑 E0.6 couple with heart</ListItem>
          <ListItem>👩‍❤️‍👨 E2.0 couple with heart: woman, man</ListItem>
          <ListItem>👨‍❤️‍👨 E2.0 couple with heart: man, man</ListItem>
          <ListItem>👩‍❤️‍👩 E2.0 couple with heart: woman, woman</ListItem>
          <ListItem>👪 E0.6 family</ListItem>
          <ListItem>👨‍👩‍👦 E2.0 family: man, woman, boy</ListItem>
          <ListItem>👨‍👩‍👧 E2.0 family: man, woman, girl</ListItem>
          <ListItem>👨‍👩‍👧‍👦 E2.0 family: man, woman, girl, boy</ListItem>
          <ListItem>👨‍👩‍👦‍👦 E2.0 family: man, woman, boy, boy</ListItem>
          <ListItem>👨‍👩‍👧‍👧 E2.0 family: man, woman, girl, girl</ListItem>
          <ListItem>👨‍👨‍👦 E2.0 family: man, man, boy</ListItem>
          <ListItem>👨‍👨‍👧 E2.0 family: man, man, girl</ListItem>
          <ListItem>👨‍👨‍👧‍👦 E2.0 family: man, man, girl, boy</ListItem>
          <ListItem>👨‍👨‍👦‍👦 E2.0 family: man, man, boy, boy</ListItem>
          <ListItem>👨‍👨‍👧‍👧 E2.0 family: man, man, girl, girl</ListItem>
          <ListItem>👩‍👩‍👦 E2.0 family: woman, woman, boy</ListItem>
          <ListItem>👩‍👩‍👧 E2.0 family: woman, woman, girl</ListItem>
          <ListItem>👩‍👩‍👧‍👦 E2.0 family: woman, woman, girl, boy</ListItem>
          <ListItem>👩‍👩‍👦‍👦 E2.0 family: woman, woman, boy, boy</ListItem>
          <ListItem>👩‍👩‍👧‍👧 E2.0 family: woman, woman, girl, girl</ListItem>
          <ListItem>👨‍👦 E4.0 family: man, boy</ListItem>
          <ListItem>👨‍👦‍👦 E4.0 family: man, boy, boy</ListItem>
          <ListItem>👨‍👧 E4.0 family: man, girl</ListItem>
          <ListItem>👨‍👧‍👦 E4.0 family: man, girl, boy</ListItem>
          <ListItem>👨‍👧‍👧 E4.0 family: man, girl, girl</ListItem>
          <ListItem>👩‍👦 E4.0 family: woman, boy</ListItem>
          <ListItem>👩‍👦‍👦 E4.0 family: woman, boy, boy</ListItem>
          <ListItem>👩‍👧 E4.0 family: woman, girl</ListItem>
          <ListItem>👩‍👧‍👦 E4.0 family: woman, girl, boy</ListItem>
          <ListItem>👩‍👧‍👧 E4.0 family: woman, girl, girl</ListItem>
          <ListItem>🗣️ E0.7 speaking head</ListItem>
          <ListItem>👤 E0.6 bust in silhouette</ListItem>
          <ListItem>👥 E1.0 busts in silhouette</ListItem>
          <ListItem>🫂 E13.0 people hugging</ListItem>
          <ListItem>👣 E0.6 footprints</ListItem>
          <ListItem>🐵 E0.6 monkey face</ListItem>
          <ListItem>🐒 E0.6 monkey</ListItem>
          <ListItem>🦍 E3.0 gorilla</ListItem>
          <ListItem>🦧 E12.0 orangutan</ListItem>
          <ListItem>🐶 E0.6 dog face</ListItem>
          <ListItem>🐕 E0.7 dog</ListItem>
          <ListItem>🦮 E12.0 guide dog</ListItem>
          <ListItem>🐕‍🦺 E12.0 service dog</ListItem>
          <ListItem>🐩 E0.6 poodle</ListItem>
          <ListItem>🐺 E0.6 wolf</ListItem>
          <ListItem>🦊 E3.0 fox</ListItem>
          <ListItem>🦝 E11.0 raccoon</ListItem>
          <ListItem>🐱 E0.6 cat face</ListItem>
          <ListItem>🐈 E0.7 cat</ListItem>
          <ListItem>🐈‍⬛ E13.0 black cat</ListItem>
          <ListItem>🦁 E1.0 lion</ListItem>
          <ListItem>🐯 E0.6 tiger face</ListItem>
          <ListItem>🐅 E1.0 tiger</ListItem>
          <ListItem>🐆 E1.0 leopard</ListItem>
          <ListItem>🐴 E0.6 horse face</ListItem>
          <ListItem>🐎 E0.6 horse</ListItem>
          <ListItem>🦄 E1.0 unicorn</ListItem>
          <ListItem>🦓 E5.0 zebra</ListItem>
          <ListItem>🦌 E3.0 deer</ListItem>
          <ListItem>🦬 E13.0 bison</ListItem>
          <ListItem>🐮 E0.6 cow face</ListItem>
          <ListItem>🐂 E1.0 ox</ListItem>
          <ListItem>🐃 E1.0 water buffalo</ListItem>
          <ListItem>🐄 E1.0 cow</ListItem>
          <ListItem>🐷 E0.6 pig face</ListItem>
          <ListItem>🐖 E1.0 pig</ListItem>
          <ListItem>🐗 E0.6 boar</ListItem>
          <ListItem>🐽 E0.6 pig nose</ListItem>
          <ListItem>🐏 E1.0 ram</ListItem>
          <ListItem>🐑 E0.6 ewe</ListItem>
          <ListItem>🐐 E1.0 goat</ListItem>
          <ListItem>🐪 E1.0 camel</ListItem>
          <ListItem>🐫 E0.6 two-hump camel</ListItem>
          <ListItem>🦙 E11.0 llama</ListItem>
          <ListItem>🦒 E5.0 giraffe</ListItem>
          <ListItem>🐘 E0.6 elephant</ListItem>
          <ListItem>🦣 E13.0 mammoth</ListItem>
          <ListItem>🦏 E3.0 rhinoceros</ListItem>
          <ListItem>🦛 E11.0 hippopotamus</ListItem>
          <ListItem>🐭 E0.6 mouse face</ListItem>
          <ListItem>🐁 E1.0 mouse</ListItem>
          <ListItem>🐀 E1.0 rat</ListItem>
          <ListItem>🐹 E0.6 hamster</ListItem>
          <ListItem>🐰 E0.6 rabbit face</ListItem>
          <ListItem>🐇 E1.0 rabbit</ListItem>
          <ListItem>🐿️ E0.7 chipmunk</ListItem>
          <ListItem>🦫 E13.0 beaver</ListItem>
          <ListItem>🦔 E5.0 hedgehog</ListItem>
          <ListItem>🦇 E3.0 bat</ListItem>
          <ListItem>🐻 E0.6 bear</ListItem>
          <ListItem>🐻‍❄️ E13.0 polar bear</ListItem>
          <ListItem>🐨 E0.6 koala</ListItem>
          <ListItem>🐼 E0.6 panda</ListItem>
          <ListItem>🦥 E12.0 sloth</ListItem>
          <ListItem>🦦 E12.0 otter</ListItem>
          <ListItem>🦨 E12.0 skunk</ListItem>
          <ListItem>🦘 E11.0 kangaroo</ListItem>
          <ListItem>🦡 E11.0 badger</ListItem>
          <ListItem>🐾 E0.6 paw prints</ListItem>
          <ListItem>🦃 E1.0 turkey</ListItem>
          <ListItem>🐔 E0.6 chicken</ListItem>
          <ListItem>🐓 E1.0 rooster</ListItem>
          <ListItem>🐣 E0.6 hatching chick</ListItem>
          <ListItem>🐤 E0.6 baby chick</ListItem>
          <ListItem>🐥 E0.6 front-facing baby chick</ListItem>
          <ListItem>🐦 E0.6 bird</ListItem>
          <ListItem>🐧 E0.6 penguin</ListItem>
          <ListItem>🕊️ E0.7 dove</ListItem>
          <ListItem>🦅 E3.0 eagle</ListItem>
          <ListItem>🦆 E3.0 duck</ListItem>
          <ListItem>🦢 E11.0 swan</ListItem>
          <ListItem>🦉 E3.0 owl</ListItem>
          <ListItem>🦤 E13.0 dodo</ListItem>
          <ListItem>🪶 E13.0 feather</ListItem>
          <ListItem>🦩 E12.0 flamingo</ListItem>
          <ListItem>🦚 E11.0 peacock</ListItem>
          <ListItem>🦜 E11.0 parrot</ListItem>
          <ListItem>🐸 E0.6 frog</ListItem>
          <ListItem>🐊 E1.0 crocodile</ListItem>
          <ListItem>🐢 E0.6 turtle</ListItem>
          <ListItem>🦎 E3.0 lizard</ListItem>
          <ListItem>🐍 E0.6 snake</ListItem>
          <ListItem>🐲 E0.6 dragon face</ListItem>
          <ListItem>🐉 E1.0 dragon</ListItem>
          <ListItem>🦕 E5.0 sauropod</ListItem>
          <ListItem>🦖 E5.0 T-Rex</ListItem>
          <ListItem>🐳 E0.6 spouting whale</ListItem>
          <ListItem>🐋 E1.0 whale</ListItem>
          <ListItem>🐬 E0.6 dolphin</ListItem>
          <ListItem>🦭 E13.0 seal</ListItem>
          <ListItem>🐟 E0.6 fish</ListItem>
          <ListItem>🐠 E0.6 tropical fish</ListItem>
          <ListItem>🐡 E0.6 blowfish</ListItem>
          <ListItem>🦈 E3.0 shark</ListItem>
          <ListItem>🐙 E0.6 octopus</ListItem>
          <ListItem>🐚 E0.6 spiral shell</ListItem>
          <ListItem>🪸 E14.0 coral</ListItem>
          <ListItem>🐌 E0.6 snail</ListItem>
          <ListItem>🦋 E3.0 butterfly</ListItem>
          <ListItem>🐛 E0.6 bug</ListItem>
          <ListItem>🐜 E0.6 ant</ListItem>
          <ListItem>🐝 E0.6 honeybee</ListItem>
          <ListItem>🪲 E13.0 beetle</ListItem>
          <ListItem>🐞 E0.6 lady beetle</ListItem>
          <ListItem>🦗 E5.0 cricket</ListItem>
          <ListItem>🪳 E13.0 cockroach</ListItem>
          <ListItem>🕷️ E0.7 spider</ListItem>
          <ListItem>🕸️ E0.7 spider web</ListItem>
          <ListItem>🦂 E1.0 scorpion</ListItem>
          <ListItem>🦟 E11.0 mosquito</ListItem>
          <ListItem>🪰 E13.0 fly</ListItem>
          <ListItem>🪱 E13.0 worm</ListItem>
          <ListItem>🦠 E11.0 microbe</ListItem>
          <ListItem>💐 E0.6 bouquet</ListItem>
          <ListItem>🌸 E0.6 cherry blossom</ListItem>
          <ListItem>💮 E0.6 white flower</ListItem>
          <ListItem>🪷 E14.0 lotus</ListItem>
          <ListItem>🏵️ E0.7 rosette</ListItem>
          <ListItem>🌹 E0.6 rose</ListItem>
          <ListItem>🥀 E3.0 wilted flower</ListItem>
          <ListItem>🌺 E0.6 hibiscus</ListItem>
          <ListItem>🌻 E0.6 sunflower</ListItem>
          <ListItem>🌼 E0.6 blossom</ListItem>
          <ListItem>🌷 E0.6 tulip</ListItem>
          <ListItem>🌱 E0.6 seedling</ListItem>
          <ListItem>🪴 E13.0 potted plant</ListItem>
          <ListItem>🌲 E1.0 evergreen tree</ListItem>
          <ListItem>🌳 E1.0 deciduous tree</ListItem>
          <ListItem>🌴 E0.6 palm tree</ListItem>
          <ListItem>🌵 E0.6 cactus</ListItem>
          <ListItem>🌾 E0.6 sheaf of rice</ListItem>
          <ListItem>🌿 E0.6 herb</ListItem>
          <ListItem>☘️ E1.0 shamrock</ListItem>
          <ListItem>🍀 E0.6 four leaf clover</ListItem>
          <ListItem>🍁 E0.6 maple leaf</ListItem>
          <ListItem>🍂 E0.6 fallen leaf</ListItem>
          <ListItem>🍃 E0.6 leaf fluttering in wind</ListItem>
          <ListItem>🪹 E14.0 empty nest</ListItem>
          <ListItem>🪺 E14.0 nest with eggs</ListItem>
          <ListItem>🍇 E0.6 grapes</ListItem>
          <ListItem>🍈 E0.6 melon</ListItem>
          <ListItem>🍉 E0.6 watermelon</ListItem>
          <ListItem>🍊 E0.6 tangerine</ListItem>
          <ListItem>🍋 E1.0 lemon</ListItem>
          <ListItem>🍌 E0.6 banana</ListItem>
          <ListItem>🍍 E0.6 pineapple</ListItem>
          <ListItem>🥭 E11.0 mango</ListItem>
          <ListItem>🍎 E0.6 red apple</ListItem>
          <ListItem>🍏 E0.6 green apple</ListItem>
          <ListItem>🍐 E1.0 pear</ListItem>
          <ListItem>🍑 E0.6 peach</ListItem>
          <ListItem>🍒 E0.6 cherries</ListItem>
          <ListItem>🍓 E0.6 strawberry</ListItem>
          <ListItem>🫐 E13.0 blueberries</ListItem>
          <ListItem>🥝 E3.0 kiwi fruit</ListItem>
          <ListItem>🍅 E0.6 tomato</ListItem>
          <ListItem>🫒 E13.0 olive</ListItem>
          <ListItem>🥥 E5.0 coconut</ListItem>
          <ListItem>🥑 E3.0 avocado</ListItem>
          <ListItem>🍆 E0.6 eggplant</ListItem>
          <ListItem>🥔 E3.0 potato</ListItem>
          <ListItem>🥕 E3.0 carrot</ListItem>
          <ListItem>🌽 E0.6 ear of corn</ListItem>
          <ListItem>🌶️ E0.7 hot pepper</ListItem>
          <ListItem>🫑 E13.0 bell pepper</ListItem>
          <ListItem>🥒 E3.0 cucumber</ListItem>
          <ListItem>🥬 E11.0 leafy green</ListItem>
          <ListItem>🥦 E5.0 broccoli</ListItem>
          <ListItem>🧄 E12.0 garlic</ListItem>
          <ListItem>🧅 E12.0 onion</ListItem>
          <ListItem>🍄 E0.6 mushroom</ListItem>
          <ListItem>🥜 E3.0 peanuts</ListItem>
          <ListItem>🫘 E14.0 beans</ListItem>
          <ListItem>🌰 E0.6 chestnut</ListItem>
          <ListItem>🍞 E0.6 bread</ListItem>
          <ListItem>🥐 E3.0 croissant</ListItem>
          <ListItem>🥖 E3.0 baguette bread</ListItem>
          <ListItem>🫓 E13.0 flatbread</ListItem>
          <ListItem>🥨 E5.0 pretzel</ListItem>
          <ListItem>🥯 E11.0 bagel</ListItem>
          <ListItem>🥞 E3.0 pancakes</ListItem>
          <ListItem>🧇 E12.0 waffle</ListItem>
          <ListItem>🧀 E1.0 cheese wedge</ListItem>
          <ListItem>🍖 E0.6 meat on bone</ListItem>
          <ListItem>🍗 E0.6 poultry leg</ListItem>
          <ListItem>🥩 E5.0 cut of meat</ListItem>
          <ListItem>🥓 E3.0 bacon</ListItem>
          <ListItem>🍔 E0.6 hamburger</ListItem>
          <ListItem>🍟 E0.6 french fries</ListItem>
          <ListItem>🍕 E0.6 pizza</ListItem>
          <ListItem>🌭 E1.0 hot dog</ListItem>
          <ListItem>🥪 E5.0 sandwich</ListItem>
          <ListItem>🌮 E1.0 taco</ListItem>
          <ListItem>🌯 E1.0 burrito</ListItem>
          <ListItem>🫔 E13.0 tamale</ListItem>
          <ListItem>🥙 E3.0 stuffed flatbread</ListItem>
          <ListItem>🧆 E12.0 falafel</ListItem>
          <ListItem>🥚 E3.0 egg</ListItem>
          <ListItem>🍳 E0.6 cooking</ListItem>
          <ListItem>🥘 E3.0 shallow pan of food</ListItem>
          <ListItem>🍲 E0.6 pot of food</ListItem>
          <ListItem>🫕 E13.0 fondue</ListItem>
          <ListItem>🥣 E5.0 bowl with spoon</ListItem>
          <ListItem>🥗 E3.0 green salad</ListItem>
          <ListItem>🍿 E1.0 popcorn</ListItem>
          <ListItem>🧈 E12.0 butter</ListItem>
          <ListItem>🧂 E11.0 salt</ListItem>
          <ListItem>🥫 E5.0 canned food</ListItem>
          <ListItem>🍱 E0.6 bento box</ListItem>
          <ListItem>🍘 E0.6 rice cracker</ListItem>
          <ListItem>🍙 E0.6 rice ball</ListItem>
          <ListItem>🍚 E0.6 cooked rice</ListItem>
          <ListItem>🍛 E0.6 curry rice</ListItem>
          <ListItem>🍜 E0.6 steaming bowl</ListItem>
          <ListItem>🍝 E0.6 spaghetti</ListItem>
          <ListItem>🍠 E0.6 roasted sweet potato</ListItem>
          <ListItem>🍢 E0.6 oden</ListItem>
          <ListItem>🍣 E0.6 sushi</ListItem>
          <ListItem>🍤 E0.6 fried shrimp</ListItem>
          <ListItem>🍥 E0.6 fish cake with swirl</ListItem>
          <ListItem>🥮 E11.0 moon cake</ListItem>
          <ListItem>🍡 E0.6 dango</ListItem>
          <ListItem>🥟 E5.0 dumpling</ListItem>
          <ListItem>🥠 E5.0 fortune cookie</ListItem>
          <ListItem>🥡 E5.0 takeout box</ListItem>
          <ListItem>🦀 E1.0 crab</ListItem>
          <ListItem>🦞 E11.0 lobster</ListItem>
          <ListItem>🦐 E3.0 shrimp</ListItem>
          <ListItem>🦑 E3.0 squid</ListItem>
          <ListItem>🦪 E12.0 oyster</ListItem>
          <ListItem>🍦 E0.6 soft ice cream</ListItem>
          <ListItem>🍧 E0.6 shaved ice</ListItem>
          <ListItem>🍨 E0.6 ice cream</ListItem>
          <ListItem>🍩 E0.6 doughnut</ListItem>
          <ListItem>🍪 E0.6 cookie</ListItem>
          <ListItem>🎂 E0.6 birthday cake</ListItem>
          <ListItem>🍰 E0.6 shortcake</ListItem>
          <ListItem>🧁 E11.0 cupcake</ListItem>
          <ListItem>🥧 E5.0 pie</ListItem>
          <ListItem>🍫 E0.6 chocolate bar</ListItem>
          <ListItem>🍬 E0.6 candy</ListItem>
          <ListItem>🍭 E0.6 lollipop</ListItem>
          <ListItem>🍮 E0.6 custard</ListItem>
          <ListItem>🍯 E0.6 honey pot</ListItem>
          <ListItem>🍼 E1.0 baby bottle</ListItem>
          <ListItem>🥛 E3.0 glass of milk</ListItem>
          <ListItem>☕ E0.6 hot beverage</ListItem>
          <ListItem>🫖 E13.0 teapot</ListItem>
          <ListItem>🍵 E0.6 teacup without handle</ListItem>
          <ListItem>🍶 E0.6 sake</ListItem>
          <ListItem>🍾 E1.0 bottle with popping cork</ListItem>
          <ListItem>🍷 E0.6 wine glass</ListItem>
          <ListItem>🍸 E0.6 cocktail glass</ListItem>
          <ListItem>🍹 E0.6 tropical drink</ListItem>
          <ListItem>🍺 E0.6 beer mug</ListItem>
          <ListItem>🍻 E0.6 clinking beer mugs</ListItem>
          <ListItem>🥂 E3.0 clinking glasses</ListItem>
          <ListItem>🥃 E3.0 tumbler glass</ListItem>
          <ListItem>🫗 E14.0 pouring liquid</ListItem>
          <ListItem>🥤 E5.0 cup with straw</ListItem>
          <ListItem>🧋 E13.0 bubble tea</ListItem>
          <ListItem>🧃 E12.0 beverage box</ListItem>
          <ListItem>🧉 E12.0 mate</ListItem>
          <ListItem>🧊 E12.0 ice</ListItem>
          <ListItem>🥢 E5.0 chopsticks</ListItem>
          <ListItem>🍽️ E0.7 fork and knife with plate</ListItem>
          <ListItem>🍴 E0.6 fork and knife</ListItem>
          <ListItem>🥄 E3.0 spoon</ListItem>
          <ListItem>🔪 E0.6 kitchen knife</ListItem>
          <ListItem>🫙 E14.0 jar</ListItem>
          <ListItem>🏺 E1.0 amphora</ListItem>
          <ListItem>🌍 E0.7 globe showing Europe-Africa</ListItem>
          <ListItem>🌎 E0.7 globe showing Americas</ListItem>
          <ListItem>🌏 E0.6 globe showing Asia-Australia</ListItem>
          <ListItem>🌐 E1.0 globe with meridians</ListItem>
          <ListItem>🗺️ E0.7 world map</ListItem>
          <ListItem>🗾 E0.6 map of Japan</ListItem>
          <ListItem>🧭 E11.0 compass</ListItem>
          <ListItem>🏔️ E0.7 snow-capped mountain</ListItem>
          <ListItem>⛰️ E0.7 mountain</ListItem>
          <ListItem>🌋 E0.6 volcano</ListItem>
          <ListItem>🗻 E0.6 mount fuji</ListItem>
          <ListItem>🏕️ E0.7 camping</ListItem>
          <ListItem>🏖️ E0.7 beach with umbrella</ListItem>
          <ListItem>🏜️ E0.7 desert</ListItem>
          <ListItem>🏝️ E0.7 desert island</ListItem>
          <ListItem>🏞️ E0.7 national park</ListItem>
          <ListItem>🏟️ E0.7 stadium</ListItem>
          <ListItem>🏛️ E0.7 classical building</ListItem>
          <ListItem>🏗️ E0.7 building construction</ListItem>
          <ListItem>🧱 E11.0 brick</ListItem>
          <ListItem>🪨 E13.0 rock</ListItem>
          <ListItem>🪵 E13.0 wood</ListItem>
          <ListItem>🛖 E13.0 hut</ListItem>
          <ListItem>🏘️ E0.7 houses</ListItem>
          <ListItem>🏚️ E0.7 derelict house</ListItem>
          <ListItem>🏠 E0.6 house</ListItem>
          <ListItem>🏡 E0.6 house with garden</ListItem>
          <ListItem>🏢 E0.6 office building</ListItem>
          <ListItem>🏣 E0.6 Japanese post office</ListItem>
          <ListItem>🏤 E1.0 post office</ListItem>
          <ListItem>🏥 E0.6 hospital</ListItem>
          <ListItem>🏦 E0.6 bank</ListItem>
          <ListItem>🏨 E0.6 hotel</ListItem>
          <ListItem>🏩 E0.6 love hotel</ListItem>
          <ListItem>🏪 E0.6 convenience store</ListItem>
          <ListItem>🏫 E0.6 school</ListItem>
          <ListItem>🏬 E0.6 department store</ListItem>
          <ListItem>🏭 E0.6 factory</ListItem>
          <ListItem>🏯 E0.6 Japanese castle</ListItem>
          <ListItem>🏰 E0.6 castle</ListItem>
          <ListItem>💒 E0.6 wedding</ListItem>
          <ListItem>🗼 E0.6 Tokyo tower</ListItem>
          <ListItem>🗽 E0.6 Statue of Liberty</ListItem>
          <ListItem>⛪ E0.6 church</ListItem>
          <ListItem>🕌 E1.0 mosque</ListItem>
          <ListItem>🛕 E12.0 hindu temple</ListItem>
          <ListItem>🕍 E1.0 synagogue</ListItem>
          <ListItem>⛩️ E0.7 shinto shrine</ListItem>
          <ListItem>🕋 E1.0 kaaba</ListItem>
          <ListItem>⛲ E0.6 fountain</ListItem>
          <ListItem>⛺ E0.6 tent</ListItem>
          <ListItem>🌁 E0.6 foggy</ListItem>
          <ListItem>🌃 E0.6 night with stars</ListItem>
          <ListItem>🏙️ E0.7 cityscape</ListItem>
          <ListItem>🌄 E0.6 sunrise over mountains</ListItem>
          <ListItem>🌅 E0.6 sunrise</ListItem>
          <ListItem>🌆 E0.6 cityscape at dusk</ListItem>
          <ListItem>🌇 E0.6 sunset</ListItem>
          <ListItem>🌉 E0.6 bridge at night</ListItem>
          <ListItem>♨️ E0.6 hot springs</ListItem>
          <ListItem>🎠 E0.6 carousel horse</ListItem>
          <ListItem>🛝 E14.0 playground slide</ListItem>
          <ListItem>🎡 E0.6 ferris wheel</ListItem>
          <ListItem>🎢 E0.6 roller coaster</ListItem>
          <ListItem>💈 E0.6 barber pole</ListItem>
          <ListItem>🎪 E0.6 circus tent</ListItem>
          <ListItem>🚂 E1.0 locomotive</ListItem>
          <ListItem>🚃 E0.6 railway car</ListItem>
          <ListItem>🚄 E0.6 high-speed train</ListItem>
          <ListItem>🚅 E0.6 bullet train</ListItem>
          <ListItem>🚆 E1.0 train</ListItem>
          <ListItem>🚇 E0.6 metro</ListItem>
          <ListItem>🚈 E1.0 light rail</ListItem>
          <ListItem>🚉 E0.6 station</ListItem>
          <ListItem>🚊 E1.0 tram</ListItem>
          <ListItem>🚝 E1.0 monorail</ListItem>
          <ListItem>🚞 E1.0 mountain railway</ListItem>
          <ListItem>🚋 E1.0 tram car</ListItem>
          <ListItem>🚌 E0.6 bus</ListItem>
          <ListItem>🚍 E0.7 oncoming bus</ListItem>
          <ListItem>🚎 E1.0 trolleybus</ListItem>
          <ListItem>🚐 E1.0 minibus</ListItem>
          <ListItem>🚑 E0.6 ambulance</ListItem>
          <ListItem>🚒 E0.6 fire engine</ListItem>
          <ListItem>🚓 E0.6 police car</ListItem>
          <ListItem>🚔 E0.7 oncoming police car</ListItem>
          <ListItem>🚕 E0.6 taxi</ListItem>
          <ListItem>🚖 E1.0 oncoming taxi</ListItem>
          <ListItem>🚗 E0.6 automobile</ListItem>
          <ListItem>🚘 E0.7 oncoming automobile</ListItem>
          <ListItem>🚙 E0.6 sport utility vehicle</ListItem>
          <ListItem>🛻 E13.0 pickup truck</ListItem>
          <ListItem>🚚 E0.6 delivery truck</ListItem>
          <ListItem>🚛 E1.0 articulated lorry</ListItem>
          <ListItem>🚜 E1.0 tractor</ListItem>
          <ListItem>🏎️ E0.7 racing car</ListItem>
          <ListItem>🏍️ E0.7 motorcycle</ListItem>
          <ListItem>🛵 E3.0 motor scooter</ListItem>
          <ListItem>🦽 E12.0 manual wheelchair</ListItem>
          <ListItem>🦼 E12.0 motorized wheelchair</ListItem>
          <ListItem>🛺 E12.0 auto rickshaw</ListItem>
          <ListItem>🚲 E0.6 bicycle</ListItem>
          <ListItem>🛴 E3.0 kick scooter</ListItem>
          <ListItem>🛹 E11.0 skateboard</ListItem>
          <ListItem>🛼 E13.0 roller skate</ListItem>
          <ListItem>🚏 E0.6 bus stop</ListItem>
          <ListItem>🛣️ E0.7 motorway</ListItem>
          <ListItem>🛤️ E0.7 railway track</ListItem>
          <ListItem>🛢️ E0.7 oil drum</ListItem>
          <ListItem>⛽ E0.6 fuel pump</ListItem>
          <ListItem>🛞 E14.0 wheel</ListItem>
          <ListItem>🚨 E0.6 police car light</ListItem>
          <ListItem>🚥 E0.6 horizontal traffic light</ListItem>
          <ListItem>🚦 E1.0 vertical traffic light</ListItem>
          <ListItem>🛑 E3.0 stop sign</ListItem>
          <ListItem>🚧 E0.6 construction</ListItem>
          <ListItem>⚓ E0.6 anchor</ListItem>
          <ListItem>🛟 E14.0 ring buoy</ListItem>
          <ListItem>⛵ E0.6 sailboat</ListItem>
          <ListItem>🛶 E3.0 canoe</ListItem>
          <ListItem>🚤 E0.6 speedboat</ListItem>
          <ListItem>🛳️ E0.7 passenger ship</ListItem>
          <ListItem>⛴️ E0.7 ferry</ListItem>
          <ListItem>🛥️ E0.7 motor boat</ListItem>
          <ListItem>🚢 E0.6 ship</ListItem>
          <ListItem>✈️ E0.6 airplane</ListItem>
          <ListItem>🛩️ E0.7 small airplane</ListItem>
          <ListItem>🛫 E1.0 airplane departure</ListItem>
          <ListItem>🛬 E1.0 airplane arrival</ListItem>
          <ListItem>🪂 E12.0 parachute</ListItem>
          <ListItem>💺 E0.6 seat</ListItem>
          <ListItem>🚁 E1.0 helicopter</ListItem>
          <ListItem>🚟 E1.0 suspension railway</ListItem>
          <ListItem>🚠 E1.0 mountain cableway</ListItem>
          <ListItem>🚡 E1.0 aerial tramway</ListItem>
          <ListItem>🛰️ E0.7 satellite</ListItem>
          <ListItem>🚀 E0.6 rocket</ListItem>
          <ListItem>🛸 E5.0 flying saucer</ListItem>
          <ListItem>🛎️ E0.7 bellhop bell</ListItem>
          <ListItem>🧳 E11.0 luggage</ListItem>
          <ListItem>⌛ E0.6 hourglass done</ListItem>
          <ListItem>⏳ E0.6 hourglass not done</ListItem>
          <ListItem>⌚ E0.6 watch</ListItem>
          <ListItem>⏰ E0.6 alarm clock</ListItem>
          <ListItem>⏱️ E1.0 stopwatch</ListItem>
          <ListItem>⏲️ E1.0 timer clock</ListItem>
          <ListItem>🕰️ E0.7 mantelpiece clock</ListItem>
          <ListItem>🕛 E0.6 twelve o’clock</ListItem>
          <ListItem>🕧 E0.7 twelve-thirty</ListItem>
          <ListItem>🕐 E0.6 one o’clock</ListItem>
          <ListItem>🕜 E0.7 one-thirty</ListItem>
          <ListItem>🕑 E0.6 two o’clock</ListItem>
          <ListItem>🕝 E0.7 two-thirty</ListItem>
          <ListItem>🕒 E0.6 three o’clock</ListItem>
          <ListItem>🕞 E0.7 three-thirty</ListItem>
          <ListItem>🕓 E0.6 four o’clock</ListItem>
          <ListItem>🕟 E0.7 four-thirty</ListItem>
          <ListItem>🕔 E0.6 five o’clock</ListItem>
          <ListItem>🕠 E0.7 five-thirty</ListItem>
          <ListItem>🕕 E0.6 six o’clock</ListItem>
          <ListItem>🕡 E0.7 six-thirty</ListItem>
          <ListItem>🕖 E0.6 seven o’clock</ListItem>
          <ListItem>🕢 E0.7 seven-thirty</ListItem>
          <ListItem>🕗 E0.6 eight o’clock</ListItem>
          <ListItem>🕣 E0.7 eight-thirty</ListItem>
          <ListItem>🕘 E0.6 nine o’clock</ListItem>
          <ListItem>🕤 E0.7 nine-thirty</ListItem>
          <ListItem>🕙 E0.6 ten o’clock</ListItem>
          <ListItem>🕥 E0.7 ten-thirty</ListItem>
          <ListItem>🕚 E0.6 eleven o’clock</ListItem>
          <ListItem>🕦 E0.7 eleven-thirty</ListItem>
          <ListItem>🌑 E0.6 new moon</ListItem>
          <ListItem>🌒 E1.0 waxing crescent moon</ListItem>
          <ListItem>🌓 E0.6 first quarter moon</ListItem>
          <ListItem>🌔 E0.6 waxing gibbous moon</ListItem>
          <ListItem>🌕 E0.6 full moon</ListItem>
          <ListItem>🌖 E1.0 waning gibbous moon</ListItem>
          <ListItem>🌗 E1.0 last quarter moon</ListItem>
          <ListItem>🌘 E1.0 waning crescent moon</ListItem>
          <ListItem>🌙 E0.6 crescent moon</ListItem>
          <ListItem>🌚 E1.0 new moon face</ListItem>
          <ListItem>🌛 E0.6 first quarter moon face</ListItem>
          <ListItem>🌜 E0.7 last quarter moon face</ListItem>
          <ListItem>🌡️ E0.7 thermometer</ListItem>
          <ListItem>☀️ E0.6 sun</ListItem>
          <ListItem>🌝 E1.0 full moon face</ListItem>
          <ListItem>🌞 E1.0 sun with face</ListItem>
          <ListItem>🪐 E12.0 ringed planet</ListItem>
          <ListItem>⭐ E0.6 star</ListItem>
          <ListItem>🌟 E0.6 glowing star</ListItem>
          <ListItem>🌠 E0.6 shooting star</ListItem>
          <ListItem>🌌 E0.6 milky way</ListItem>
          <ListItem>☁️ E0.6 cloud</ListItem>
          <ListItem>⛅ E0.6 sun behind cloud</ListItem>
          <ListItem>⛈️ E0.7 cloud with lightning and rain</ListItem>
          <ListItem>🌤️ E0.7 sun behind small cloud</ListItem>
          <ListItem>🌥️ E0.7 sun behind large cloud</ListItem>
          <ListItem>🌦️ E0.7 sun behind rain cloud</ListItem>
          <ListItem>🌧️ E0.7 cloud with rain</ListItem>
          <ListItem>🌨️ E0.7 cloud with snow</ListItem>
          <ListItem>🌩️ E0.7 cloud with lightning</ListItem>
          <ListItem>🌪️ E0.7 tornado</ListItem>
          <ListItem>🌫️ E0.7 fog</ListItem>
          <ListItem>🌬️ E0.7 wind face</ListItem>
          <ListItem>🌀 E0.6 cyclone</ListItem>
          <ListItem>🌈 E0.6 rainbow</ListItem>
          <ListItem>🌂 E0.6 closed umbrella</ListItem>
          <ListItem>☂️ E0.7 umbrella</ListItem>
          <ListItem>☔ E0.6 umbrella with rain drops</ListItem>
          <ListItem>⛱️ E0.7 umbrella on ground</ListItem>
          <ListItem>⚡ E0.6 high voltage</ListItem>
          <ListItem>❄️ E0.6 snowflake</ListItem>
          <ListItem>☃️ E0.7 snowman</ListItem>
          <ListItem>⛄ E0.6 snowman without snow</ListItem>
          <ListItem>☄️ E1.0 comet</ListItem>
          <ListItem>🔥 E0.6 fire</ListItem>
          <ListItem>💧 E0.6 droplet</ListItem>
          <ListItem>🌊 E0.6 water wave</ListItem>
          <ListItem>🎃 E0.6 jack-o-lantern</ListItem>
          <ListItem>🎄 E0.6 Christmas tree</ListItem>
          <ListItem>🎆 E0.6 fireworks</ListItem>
          <ListItem>🎇 E0.6 sparkler</ListItem>
          <ListItem>🧨 E11.0 firecracker</ListItem>
          <ListItem>✨ E0.6 sparkles</ListItem>
          <ListItem>🎈 E0.6 balloon</ListItem>
          <ListItem>🎉 E0.6 party popper</ListItem>
          <ListItem>🎊 E0.6 confetti ball</ListItem>
          <ListItem>🎋 E0.6 tanabata tree</ListItem>
          <ListItem>🎍 E0.6 pine decoration</ListItem>
          <ListItem>🎎 E0.6 Japanese dolls</ListItem>
          <ListItem>🎏 E0.6 carp streamer</ListItem>
          <ListItem>🎐 E0.6 wind chime</ListItem>
          <ListItem>🎑 E0.6 moon viewing ceremony</ListItem>
          <ListItem>🧧 E11.0 red envelope</ListItem>
          <ListItem>🎀 E0.6 ribbon</ListItem>
          <ListItem>🎁 E0.6 wrapped gift</ListItem>
          <ListItem>🎗️ E0.7 reminder ribbon</ListItem>
          <ListItem>🎟️ E0.7 admission tickets</ListItem>
          <ListItem>🎫 E0.6 ticket</ListItem>
          <ListItem>🎖️ E0.7 military medal</ListItem>
          <ListItem>🏆 E0.6 trophy</ListItem>
          <ListItem>🏅 E1.0 sports medal</ListItem>
          <ListItem>🥇 E3.0 1st place medal</ListItem>
          <ListItem>🥈 E3.0 2nd place medal</ListItem>
          <ListItem>🥉 E3.0 3rd place medal</ListItem>
          <ListItem>⚽ E0.6 soccer ball</ListItem>
          <ListItem>⚾ E0.6 baseball</ListItem>
          <ListItem>🥎 E11.0 softball</ListItem>
          <ListItem>🏀 E0.6 basketball</ListItem>
          <ListItem>🏐 E1.0 volleyball</ListItem>
          <ListItem>🏈 E0.6 american football</ListItem>
          <ListItem>🏉 E1.0 rugby football</ListItem>
          <ListItem>🎾 E0.6 tennis</ListItem>
          <ListItem>🥏 E11.0 flying disc</ListItem>
          <ListItem>🎳 E0.6 bowling</ListItem>
          <ListItem>🏏 E1.0 cricket game</ListItem>
          <ListItem>🏑 E1.0 field hockey</ListItem>
          <ListItem>🏒 E1.0 ice hockey</ListItem>
          <ListItem>🥍 E11.0 lacrosse</ListItem>
          <ListItem>🏓 E1.0 ping pong</ListItem>
          <ListItem>🏸 E1.0 badminton</ListItem>
          <ListItem>🥊 E3.0 boxing glove</ListItem>
          <ListItem>🥋 E3.0 martial arts uniform</ListItem>
          <ListItem>🥅 E3.0 goal net</ListItem>
          <ListItem>⛳ E0.6 flag in hole</ListItem>
          <ListItem>⛸️ E0.7 ice skate</ListItem>
          <ListItem>🎣 E0.6 fishing pole</ListItem>
          <ListItem>🤿 E12.0 diving mask</ListItem>
          <ListItem>🎽 E0.6 running shirt</ListItem>
          <ListItem>🎿 E0.6 skis</ListItem>
          <ListItem>🛷 E5.0 sled</ListItem>
          <ListItem>🥌 E5.0 curling stone</ListItem>
          <ListItem>🎯 E0.6 bullseye</ListItem>
          <ListItem>🪀 E12.0 yo-yo</ListItem>
          <ListItem>🪁 E12.0 kite</ListItem>
          <ListItem>🎱 E0.6 pool 8 ball</ListItem>
          <ListItem>🔮 E0.6 crystal ball</ListItem>
          <ListItem>🪄 E13.0 magic wand</ListItem>
          <ListItem>🧿 E11.0 nazar amulet</ListItem>
          <ListItem>🪬 E14.0 hamsa</ListItem>
          <ListItem>🎮 E0.6 video game</ListItem>
          <ListItem>🕹️ E0.7 joystick</ListItem>
          <ListItem>🎰 E0.6 slot machine</ListItem>
          <ListItem>🎲 E0.6 game die</ListItem>
          <ListItem>🧩 E11.0 puzzle piece</ListItem>
          <ListItem>🧸 E11.0 teddy bear</ListItem>
          <ListItem>🪅 E13.0 piñata</ListItem>
          <ListItem>🪩 E14.0 mirror ball</ListItem>
          <ListItem>🪆 E13.0 nesting dolls</ListItem>
          <ListItem>♠️ E0.6 spade suit</ListItem>
          <ListItem>♥️ E0.6 heart suit</ListItem>
          <ListItem>♦️ E0.6 diamond suit</ListItem>
          <ListItem>♣️ E0.6 club suit</ListItem>
          <ListItem>♟️ E11.0 chess pawn</ListItem>
          <ListItem>🃏 E0.6 joker</ListItem>
          <ListItem>🀄 E0.6 mahjong red dragon</ListItem>
          <ListItem>🎴 E0.6 flower playing cards</ListItem>
          <ListItem>🎭 E0.6 performing arts</ListItem>
          <ListItem>🖼️ E0.7 framed picture</ListItem>
          <ListItem>🎨 E0.6 artist palette</ListItem>
          <ListItem>🧵 E11.0 thread</ListItem>
          <ListItem>🪡 E13.0 sewing needle</ListItem>
          <ListItem>🧶 E11.0 yarn</ListItem>
          <ListItem>🪢 E13.0 knot</ListItem>
          <ListItem>👓 E0.6 glasses</ListItem>
          <ListItem>🕶️ E0.7 sunglasses</ListItem>
          <ListItem>🥽 E11.0 goggles</ListItem>
          <ListItem>🥼 E11.0 lab coat</ListItem>
          <ListItem>🦺 E12.0 safety vest</ListItem>
          <ListItem>👔 E0.6 necktie</ListItem>
          <ListItem>👕 E0.6 t-shirt</ListItem>
          <ListItem>👖 E0.6 jeans</ListItem>
          <ListItem>🧣 E5.0 scarf</ListItem>
          <ListItem>🧤 E5.0 gloves</ListItem>
          <ListItem>🧥 E5.0 coat</ListItem>
          <ListItem>🧦 E5.0 socks</ListItem>
          <ListItem>👗 E0.6 dress</ListItem>
          <ListItem>👘 E0.6 kimono</ListItem>
          <ListItem>🥻 E12.0 sari</ListItem>
          <ListItem>🩱 E12.0 one-piece swimsuit</ListItem>
          <ListItem>🩲 E12.0 briefs</ListItem>
          <ListItem>🩳 E12.0 shorts</ListItem>
          <ListItem>👙 E0.6 bikini</ListItem>
          <ListItem>👚 E0.6 woman’s clothes</ListItem>
          <ListItem>👛 E0.6 purse</ListItem>
          <ListItem>👜 E0.6 handbag</ListItem>
          <ListItem>👝 E0.6 clutch bag</ListItem>
          <ListItem>🛍️ E0.7 shopping bags</ListItem>
          <ListItem>🎒 E0.6 backpack</ListItem>
          <ListItem>🩴 E13.0 thong sandal</ListItem>
          <ListItem>👞 E0.6 man’s shoe</ListItem>
          <ListItem>👟 E0.6 running shoe</ListItem>
          <ListItem>🥾 E11.0 hiking boot</ListItem>
          <ListItem>🥿 E11.0 flat shoe</ListItem>
          <ListItem>👠 E0.6 high-heeled shoe</ListItem>
          <ListItem>👡 E0.6 woman’s sandal</ListItem>
          <ListItem>🩰 E12.0 ballet shoes</ListItem>
          <ListItem>👢 E0.6 woman’s boot</ListItem>
          <ListItem>👑 E0.6 crown</ListItem>
          <ListItem>👒 E0.6 woman’s hat</ListItem>
          <ListItem>🎩 E0.6 top hat</ListItem>
          <ListItem>🎓 E0.6 graduation cap</ListItem>
          <ListItem>🧢 E5.0 billed cap</ListItem>
          <ListItem>🪖 E13.0 military helmet</ListItem>
          <ListItem>⛑️ E0.7 rescue worker’s helmet</ListItem>
          <ListItem>📿 E1.0 prayer beads</ListItem>
          <ListItem>💄 E0.6 lipstick</ListItem>
          <ListItem>💍 E0.6 ring</ListItem>
          <ListItem>💎 E0.6 gem stone</ListItem>
          <ListItem>🔇 E1.0 muted speaker</ListItem>
          <ListItem>🔈 E0.7 speaker low volume</ListItem>
          <ListItem>🔉 E1.0 speaker medium volume</ListItem>
          <ListItem>🔊 E0.6 speaker high volume</ListItem>
          <ListItem>📢 E0.6 loudspeaker</ListItem>
          <ListItem>📣 E0.6 megaphone</ListItem>
          <ListItem>📯 E1.0 postal horn</ListItem>
          <ListItem>🔔 E0.6 bell</ListItem>
          <ListItem>🔕 E1.0 bell with slash</ListItem>
          <ListItem>🎼 E0.6 musical score</ListItem>
          <ListItem>🎵 E0.6 musical note</ListItem>
          <ListItem>🎶 E0.6 musical notes</ListItem>
          <ListItem>🎙️ E0.7 studio microphone</ListItem>
          <ListItem>🎚️ E0.7 level slider</ListItem>
          <ListItem>🎛️ E0.7 control knobs</ListItem>
          <ListItem>🎤 E0.6 microphone</ListItem>
          <ListItem>🎧 E0.6 headphone</ListItem>
          <ListItem>📻 E0.6 radio</ListItem>
          <ListItem>🎷 E0.6 saxophone</ListItem>
          <ListItem>🪗 E13.0 accordion</ListItem>
          <ListItem>🎸 E0.6 guitar</ListItem>
          <ListItem>🎹 E0.6 musical keyboard</ListItem>
          <ListItem>🎺 E0.6 trumpet</ListItem>
          <ListItem>🎻 E0.6 violin</ListItem>
          <ListItem>🪕 E12.0 banjo</ListItem>
          <ListItem>🥁 E3.0 drum</ListItem>
          <ListItem>🪘 E13.0 long drum</ListItem>
          <ListItem>📱 E0.6 mobile phone</ListItem>
          <ListItem>📲 E0.6 mobile phone with arrow</ListItem>
          <ListItem>☎️ E0.6 telephone</ListItem>
          <ListItem>📞 E0.6 telephone receiver</ListItem>
          <ListItem>📟 E0.6 pager</ListItem>
          <ListItem>📠 E0.6 fax machine</ListItem>
          <ListItem>🔋 E0.6 battery</ListItem>
          <ListItem>🪫 E14.0 low battery</ListItem>
          <ListItem>🔌 E0.6 electric plug</ListItem>
          <ListItem>💻 E0.6 laptop</ListItem>
          <ListItem>🖥️ E0.7 desktop computer</ListItem>
          <ListItem>🖨️ E0.7 printer</ListItem>
          <ListItem>⌨️ E1.0 keyboard</ListItem>
          <ListItem>🖱️ E0.7 computer mouse</ListItem>
          <ListItem>🖲️ E0.7 trackball</ListItem>
          <ListItem>💽 E0.6 computer disk</ListItem>
          <ListItem>💾 E0.6 floppy disk</ListItem>
          <ListItem>💿 E0.6 optical disk</ListItem>
          <ListItem>📀 E0.6 dvd</ListItem>
          <ListItem>🧮 E11.0 abacus</ListItem>
          <ListItem>🎥 E0.6 movie camera</ListItem>
          <ListItem>🎞️ E0.7 film frames</ListItem>
          <ListItem>📽️ E0.7 film projector</ListItem>
          <ListItem>🎬 E0.6 clapper board</ListItem>
          <ListItem>📺 E0.6 television</ListItem>
          <ListItem>📷 E0.6 camera</ListItem>
          <ListItem>📸 E1.0 camera with flash</ListItem>
          <ListItem>📹 E0.6 video camera</ListItem>
          <ListItem>📼 E0.6 videocassette</ListItem>
          <ListItem>🔍 E0.6 magnifying glass tilted left</ListItem>
          <ListItem>🔎 E0.6 magnifying glass tilted right</ListItem>
          <ListItem>🕯️ E0.7 candle</ListItem>
          <ListItem>💡 E0.6 light bulb</ListItem>
          <ListItem>🔦 E0.6 flashlight</ListItem>
          <ListItem>🏮 E0.6 red paper lantern</ListItem>
          <ListItem>🪔 E12.0 diya lamp</ListItem>
          <ListItem>📔 E0.6 notebook with decorative cover</ListItem>
          <ListItem>📕 E0.6 closed book</ListItem>
          <ListItem>📖 E0.6 open book</ListItem>
          <ListItem>📗 E0.6 green book</ListItem>
          <ListItem>📘 E0.6 blue book</ListItem>
          <ListItem>📙 E0.6 orange book</ListItem>
          <ListItem>📚 E0.6 books</ListItem>
          <ListItem>📓 E0.6 notebook</ListItem>
          <ListItem>📒 E0.6 ledger</ListItem>
          <ListItem>📃 E0.6 page with curl</ListItem>
          <ListItem>📜 E0.6 scroll</ListItem>
          <ListItem>📄 E0.6 page facing up</ListItem>
          <ListItem>📰 E0.6 newspaper</ListItem>
          <ListItem>🗞️ E0.7 rolled-up newspaper</ListItem>
          <ListItem>📑 E0.6 bookmark tabs</ListItem>
          <ListItem>🔖 E0.6 bookmark</ListItem>
          <ListItem>🏷️ E0.7 label</ListItem>
          <ListItem>💰 E0.6 money bag</ListItem>
          <ListItem>🪙 E13.0 coin</ListItem>
          <ListItem>💴 E0.6 yen banknote</ListItem>
          <ListItem>💵 E0.6 dollar banknote</ListItem>
          <ListItem>💶 E1.0 euro banknote</ListItem>
          <ListItem>💷 E1.0 pound banknote</ListItem>
          <ListItem>💸 E0.6 money with wings</ListItem>
          <ListItem>💳 E0.6 credit card</ListItem>
          <ListItem>🧾 E11.0 receipt</ListItem>
          <ListItem>💹 E0.6 chart increasing with yen</ListItem>
          <ListItem>✉️ E0.6 envelope</ListItem>
          <ListItem>📧 E0.6 e-mail</ListItem>
          <ListItem>📨 E0.6 incoming envelope</ListItem>
          <ListItem>📩 E0.6 envelope with arrow</ListItem>
          <ListItem>📤 E0.6 outbox tray</ListItem>
          <ListItem>📥 E0.6 inbox tray</ListItem>
          <ListItem>📦 E0.6 package</ListItem>
          <ListItem>📫 E0.6 closed mailbox with raised flag</ListItem>
          <ListItem>📪 E0.6 closed mailbox with lowered flag</ListItem>
          <ListItem>📬 E0.7 open mailbox with raised flag</ListItem>
          <ListItem>📭 E0.7 open mailbox with lowered flag</ListItem>
          <ListItem>📮 E0.6 postbox</ListItem>
          <ListItem>🗳️ E0.7 ballot box with ballot</ListItem>
          <ListItem>✏️ E0.6 pencil</ListItem>
          <ListItem>✒️ E0.6 black nib</ListItem>
          <ListItem>🖋️ E0.7 fountain pen</ListItem>
          <ListItem>🖊️ E0.7 pen</ListItem>
          <ListItem>🖌️ E0.7 paintbrush</ListItem>
          <ListItem>🖍️ E0.7 crayon</ListItem>
          <ListItem>📝 E0.6 memo</ListItem>
          <ListItem>💼 E0.6 briefcase</ListItem>
          <ListItem>📁 E0.6 file folder</ListItem>
          <ListItem>📂 E0.6 open file folder</ListItem>
          <ListItem>🗂️ E0.7 card index dividers</ListItem>
          <ListItem>📅 E0.6 calendar</ListItem>
          <ListItem>📆 E0.6 tear-off calendar</ListItem>
          <ListItem>🗒️ E0.7 spiral notepad</ListItem>
          <ListItem>🗓️ E0.7 spiral calendar</ListItem>
          <ListItem>📇 E0.6 card index</ListItem>
          <ListItem>📈 E0.6 chart increasing</ListItem>
          <ListItem>📉 E0.6 chart decreasing</ListItem>
          <ListItem>📊 E0.6 bar chart</ListItem>
          <ListItem>📋 E0.6 clipboard</ListItem>
          <ListItem>📌 E0.6 pushpin</ListItem>
          <ListItem>📍 E0.6 round pushpin</ListItem>
          <ListItem>📎 E0.6 paperclip</ListItem>
          <ListItem>🖇️ E0.7 linked paperclips</ListItem>
          <ListItem>📏 E0.6 straight ruler</ListItem>
          <ListItem>📐 E0.6 triangular ruler</ListItem>
          <ListItem>✂️ E0.6 scissors</ListItem>
          <ListItem>🗃️ E0.7 card file box</ListItem>
          <ListItem>🗄️ E0.7 file cabinet</ListItem>
          <ListItem>🗑️ E0.7 wastebasket</ListItem>
          <ListItem>🔒 E0.6 locked</ListItem>
          <ListItem>🔓 E0.6 unlocked</ListItem>
          <ListItem>🔏 E0.6 locked with pen</ListItem>
          <ListItem>🔐 E0.6 locked with key</ListItem>
          <ListItem>🔑 E0.6 key</ListItem>
          <ListItem>🗝️ E0.7 old key</ListItem>
          <ListItem>🔨 E0.6 hammer</ListItem>
          <ListItem>🪓 E12.0 axe</ListItem>
          <ListItem>⛏️ E0.7 pick</ListItem>
          <ListItem>⚒️ E1.0 hammer and pick</ListItem>
          <ListItem>🛠️ E0.7 hammer and wrench</ListItem>
          <ListItem>🗡️ E0.7 dagger</ListItem>
          <ListItem>⚔️ E1.0 crossed swords</ListItem>
          <ListItem>🔫 E0.6 water pistol</ListItem>
          <ListItem>🪃 E13.0 boomerang</ListItem>
          <ListItem>🏹 E1.0 bow and arrow</ListItem>
          <ListItem>🛡️ E0.7 shield</ListItem>
          <ListItem>🪚 E13.0 carpentry saw</ListItem>
          <ListItem>🔧 E0.6 wrench</ListItem>
          <ListItem>🪛 E13.0 screwdriver</ListItem>
          <ListItem>🔩 E0.6 nut and bolt</ListItem>
          <ListItem>⚙️ E1.0 gear</ListItem>
          <ListItem>🗜️ E0.7 clamp</ListItem>
          <ListItem>⚖️ E1.0 balance scale</ListItem>
          <ListItem>🦯 E12.0 white cane</ListItem>
          <ListItem>🔗 E0.6 link</ListItem>
          <ListItem>⛓️ E0.7 chains</ListItem>
          <ListItem>🪝 E13.0 hook</ListItem>
          <ListItem>🧰 E11.0 toolbox</ListItem>
          <ListItem>🧲 E11.0 magnet</ListItem>
          <ListItem>🪜 E13.0 ladder</ListItem>
          <ListItem>⚗️ E1.0 alembic</ListItem>
          <ListItem>🧪 E11.0 test tube</ListItem>
          <ListItem>🧫 E11.0 petri dish</ListItem>
          <ListItem>🧬 E11.0 dna</ListItem>
          <ListItem>🔬 E1.0 microscope</ListItem>
          <ListItem>🔭 E1.0 telescope</ListItem>
          <ListItem>📡 E0.6 satellite antenna</ListItem>
          <ListItem>💉 E0.6 syringe</ListItem>
          <ListItem>🩸 E12.0 drop of blood</ListItem>
          <ListItem>💊 E0.6 pill</ListItem>
          <ListItem>🩹 E12.0 adhesive bandage</ListItem>
          <ListItem>🩼 E14.0 crutch</ListItem>
          <ListItem>🩺 E12.0 stethoscope</ListItem>
          <ListItem>🩻 E14.0 x-ray</ListItem>
          <ListItem>🚪 E0.6 door</ListItem>
          <ListItem>🛗 E13.0 elevator</ListItem>
          <ListItem>🪞 E13.0 mirror</ListItem>
          <ListItem>🪟 E13.0 window</ListItem>
          <ListItem>🛏️ E0.7 bed</ListItem>
          <ListItem>🛋️ E0.7 couch and lamp</ListItem>
          <ListItem>🪑 E12.0 chair</ListItem>
          <ListItem>🚽 E0.6 toilet</ListItem>
          <ListItem>🪠 E13.0 plunger</ListItem>
          <ListItem>🚿 E1.0 shower</ListItem>
          <ListItem>🛁 E1.0 bathtub</ListItem>
          <ListItem>🪤 E13.0 mouse trap</ListItem>
          <ListItem>🪒 E12.0 razor</ListItem>
          <ListItem>🧴 E11.0 lotion bottle</ListItem>
          <ListItem>🧷 E11.0 safety pin</ListItem>
          <ListItem>🧹 E11.0 broom</ListItem>
          <ListItem>🧺 E11.0 basket</ListItem>
          <ListItem>🧻 E11.0 roll of paper</ListItem>
          <ListItem>🪣 E13.0 bucket</ListItem>
          <ListItem>🧼 E11.0 soap</ListItem>
          <ListItem>🫧 E14.0 bubbles</ListItem>
          <ListItem>🪥 E13.0 toothbrush</ListItem>
          <ListItem>🧽 E11.0 sponge</ListItem>
          <ListItem>🧯 E11.0 fire extinguisher</ListItem>
          <ListItem>🛒 E3.0 shopping cart</ListItem>
          <ListItem>🚬 E0.6 cigarette</ListItem>
          <ListItem>⚰️ E1.0 coffin</ListItem>
          <ListItem>🪦 E13.0 headstone</ListItem>
          <ListItem>⚱️ E1.0 funeral urn</ListItem>
          <ListItem>🗿 E0.6 moai</ListItem>
          <ListItem>🪧 E13.0 placard</ListItem>
          <ListItem>🪪 E14.0 identification card</ListItem>
          <ListItem>🏧 E0.6 ATM sign</ListItem>
          <ListItem>🚮 E1.0 litter in bin sign</ListItem>
          <ListItem>🚰 E1.0 potable water</ListItem>
          <ListItem>♿ E0.6 wheelchair symbol</ListItem>
          <ListItem>🚹 E0.6 men’s room</ListItem>
          <ListItem>🚺 E0.6 women’s room</ListItem>
          <ListItem>🚻 E0.6 restroom</ListItem>
          <ListItem>🚼 E0.6 baby symbol</ListItem>
          <ListItem>🚾 E0.6 water closet</ListItem>
          <ListItem>🛂 E1.0 passport control</ListItem>
          <ListItem>🛃 E1.0 customs</ListItem>
          <ListItem>🛄 E1.0 baggage claim</ListItem>
          <ListItem>🛅 E1.0 left luggage</ListItem>
          <ListItem>⚠️ E0.6 warning</ListItem>
          <ListItem>🚸 E1.0 children crossing</ListItem>
          <ListItem>⛔ E0.6 no entry</ListItem>
          <ListItem>🚫 E0.6 prohibited</ListItem>
          <ListItem>🚳 E1.0 no bicycles</ListItem>
          <ListItem>🚭 E0.6 no smoking</ListItem>
          <ListItem>🚯 E1.0 no littering</ListItem>
          <ListItem>🚱 E1.0 non-potable water</ListItem>
          <ListItem>🚷 E1.0 no pedestrians</ListItem>
          <ListItem>📵 E1.0 no mobile phones</ListItem>
          <ListItem>🔞 E0.6 no one under eighteen</ListItem>
          <ListItem>☢️ E1.0 radioactive</ListItem>
          <ListItem>☣️ E1.0 biohazard</ListItem>
          <ListItem>⬆️ E0.6 up arrow</ListItem>
          <ListItem>↗️ E0.6 up-right arrow</ListItem>
          <ListItem>➡️ E0.6 right arrow</ListItem>
          <ListItem>↘️ E0.6 down-right arrow</ListItem>
          <ListItem>⬇️ E0.6 down arrow</ListItem>
          <ListItem>↙️ E0.6 down-left arrow</ListItem>
          <ListItem>⬅️ E0.6 left arrow</ListItem>
          <ListItem>↖️ E0.6 up-left arrow</ListItem>
          <ListItem>↕️ E0.6 up-down arrow</ListItem>
          <ListItem>↔️ E0.6 left-right arrow</ListItem>
          <ListItem>↩️ E0.6 right arrow curving left</ListItem>
          <ListItem>↪️ E0.6 left arrow curving right</ListItem>
          <ListItem>⤴️ E0.6 right arrow curving up</ListItem>
          <ListItem>⤵️ E0.6 right arrow curving down</ListItem>
          <ListItem>🔃 E0.6 clockwise vertical arrows</ListItem>
          <ListItem>🔄 E1.0 counterclockwise arrows button</ListItem>
          <ListItem>🔙 E0.6 BACK arrow</ListItem>
          <ListItem>🔚 E0.6 END arrow</ListItem>
          <ListItem>🔛 E0.6 ON! arrow</ListItem>
          <ListItem>🔜 E0.6 SOON arrow</ListItem>
          <ListItem>🔝 E0.6 TOP arrow</ListItem>
          <ListItem>🛐 E1.0 place of worship</ListItem>
          <ListItem>⚛️ E1.0 atom symbol</ListItem>
          <ListItem>🕉️ E0.7 om</ListItem>
          <ListItem>✡️ E0.7 star of David</ListItem>
          <ListItem>☸️ E0.7 wheel of dharma</ListItem>
          <ListItem>☯️ E0.7 yin yang</ListItem>
          <ListItem>✝️ E0.7 latin cross</ListItem>
          <ListItem>☦️ E1.0 orthodox cross</ListItem>
          <ListItem>☪️ E0.7 star and crescent</ListItem>
          <ListItem>☮️ E1.0 peace symbol</ListItem>
          <ListItem>🕎 E1.0 menorah</ListItem>
          <ListItem>🔯 E0.6 dotted six-pointed star</ListItem>
          <ListItem>♈ E0.6 Aries</ListItem>
          <ListItem>♉ E0.6 Taurus</ListItem>
          <ListItem>♊ E0.6 Gemini</ListItem>
          <ListItem>♋ E0.6 Cancer</ListItem>
          <ListItem>♌ E0.6 Leo</ListItem>
          <ListItem>♍ E0.6 Virgo</ListItem>
          <ListItem>♎ E0.6 Libra</ListItem>
          <ListItem>♏ E0.6 Scorpio</ListItem>
          <ListItem>♐ E0.6 Sagittarius</ListItem>
          <ListItem>♑ E0.6 Capricorn</ListItem>
          <ListItem>♒ E0.6 Aquarius</ListItem>
          <ListItem>♓ E0.6 Pisces</ListItem>
          <ListItem>⛎ E0.6 Ophiuchus</ListItem>
          <ListItem>🔀 E1.0 shuffle tracks button</ListItem>
          <ListItem>🔁 E1.0 repeat button</ListItem>
          <ListItem>🔂 E1.0 repeat single button</ListItem>
          <ListItem>▶️ E0.6 play button</ListItem>
          <ListItem>⏩ E0.6 fast-forward button</ListItem>
          <ListItem>⏭️ E0.7 next track button</ListItem>
          <ListItem>⏯️ E1.0 play or pause button</ListItem>
          <ListItem>◀️ E0.6 reverse button</ListItem>
          <ListItem>⏪ E0.6 fast reverse button</ListItem>
          <ListItem>⏮️ E0.7 last track button</ListItem>
          <ListItem>🔼 E0.6 upwards button</ListItem>
          <ListItem>⏫ E0.6 fast up button</ListItem>
          <ListItem>🔽 E0.6 downwards button</ListItem>
          <ListItem>⏬ E0.6 fast down button</ListItem>
          <ListItem>⏸️ E0.7 pause button</ListItem>
          <ListItem>⏹️ E0.7 stop button</ListItem>
          <ListItem>⏺️ E0.7 record button</ListItem>
          <ListItem>⏏️ E1.0 eject button</ListItem>
          <ListItem>🎦 E0.6 cinema</ListItem>
          <ListItem>🔅 E1.0 dim button</ListItem>
          <ListItem>🔆 E1.0 bright button</ListItem>
          <ListItem>📶 E0.6 antenna bars</ListItem>
          <ListItem>📳 E0.6 vibration mode</ListItem>
          <ListItem>📴 E0.6 mobile phone off</ListItem>
          <ListItem>♀️ E4.0 female sign</ListItem>
          <ListItem>♂️ E4.0 male sign</ListItem>
          <ListItem>⚧️ E13.0 transgender symbol</ListItem>
          <ListItem>✖️ E0.6 multiply</ListItem>
          <ListItem>➕ E0.6 plus</ListItem>
          <ListItem>➖ E0.6 minus</ListItem>
          <ListItem>➗ E0.6 divide</ListItem>
          <ListItem>🟰 E14.0 heavy equals sign</ListItem>
          <ListItem>♾️ E11.0 infinity</ListItem>
          <ListItem>‼️ E0.6 double exclamation mark</ListItem>
          <ListItem>⁉️ E0.6 exclamation question mark</ListItem>
          <ListItem>❓ E0.6 red question mark</ListItem>
          <ListItem>❔ E0.6 white question mark</ListItem>
          <ListItem>❕ E0.6 white exclamation mark</ListItem>
          <ListItem>❗ E0.6 red exclamation mark</ListItem>
          <ListItem>〰️ E0.6 wavy dash</ListItem>
          <ListItem>💱 E0.6 currency exchange</ListItem>
          <ListItem>💲 E0.6 heavy dollar sign</ListItem>
          <ListItem>⚕️ E4.0 medical symbol</ListItem>
          <ListItem>♻️ E0.6 recycling symbol</ListItem>
          <ListItem>⚜️ E1.0 fleur-de-lis</ListItem>
          <ListItem>🔱 E0.6 trident emblem</ListItem>
          <ListItem>📛 E0.6 name badge</ListItem>
          <ListItem>🔰 E0.6 Japanese symbol for beginner</ListItem>
          <ListItem>⭕ E0.6 hollow red circle</ListItem>
          <ListItem>✅ E0.6 check mark button</ListItem>
          <ListItem>☑️ E0.6 check box with check</ListItem>
          <ListItem>✔️ E0.6 check mark</ListItem>
          <ListItem>❌ E0.6 cross mark</ListItem>
          <ListItem>❎ E0.6 cross mark button</ListItem>
          <ListItem>➰ E0.6 curly loop</ListItem>
          <ListItem>➿ E1.0 double curly loop</ListItem>
          <ListItem>〽️ E0.6 part alternation mark</ListItem>
          <ListItem>✳️ E0.6 eight-spoked asterisk</ListItem>
          <ListItem>✴️ E0.6 eight-pointed star</ListItem>
          <ListItem>❇️ E0.6 sparkle</ListItem>
          <ListItem>©️ E0.6 copyright</ListItem>
          <ListItem>®️ E0.6 registered</ListItem>
          <ListItem>™️ E0.6 trade mark</ListItem>
          <ListItem>#️⃣ E0.6 keycap: #</ListItem>
          <ListItem>*️⃣ E2.0 keycap: *</ListItem>
          <ListItem>0️⃣ E0.6 keycap: 0</ListItem>
          <ListItem>1️⃣ E0.6 keycap: 1</ListItem>
          <ListItem>2️⃣ E0.6 keycap: 2</ListItem>
          <ListItem>3️⃣ E0.6 keycap: 3</ListItem>
          <ListItem>4️⃣ E0.6 keycap: 4</ListItem>
          <ListItem>5️⃣ E0.6 keycap: 5</ListItem>
          <ListItem>6️⃣ E0.6 keycap: 6</ListItem>
          <ListItem>7️⃣ E0.6 keycap: 7</ListItem>
          <ListItem>8️⃣ E0.6 keycap: 8</ListItem>
          <ListItem>9️⃣ E0.6 keycap: 9</ListItem>
          <ListItem>🔟 E0.6 keycap: 10</ListItem>
          <ListItem>🔠 E0.6 input latin uppercase</ListItem>
          <ListItem>🔡 E0.6 input latin lowercase</ListItem>
          <ListItem>🔢 E0.6 input numbers</ListItem>
          <ListItem>🔣 E0.6 input symbols</ListItem>
          <ListItem>🔤 E0.6 input latin letters</ListItem>
          <ListItem>🅰️ E0.6 A button (blood type)</ListItem>
          <ListItem>🆎 E0.6 AB button (blood type)</ListItem>
          <ListItem>🅱️ E0.6 B button (blood type)</ListItem>
          <ListItem>🆑 E0.6 CL button</ListItem>
          <ListItem>🆒 E0.6 COOL button</ListItem>
          <ListItem>🆓 E0.6 FREE button</ListItem>
          <ListItem>ℹ️ E0.6 information</ListItem>
          <ListItem>🆔 E0.6 ID button</ListItem>
          <ListItem>Ⓜ️ E0.6 circled M</ListItem>
          <ListItem>🆕 E0.6 NEW button</ListItem>
          <ListItem>🆖 E0.6 NG button</ListItem>
          <ListItem>🅾️ E0.6 O button (blood type)</ListItem>
          <ListItem>🆗 E0.6 OK button</ListItem>
          <ListItem>🅿️ E0.6 P button</ListItem>
          <ListItem>🆘 E0.6 SOS button</ListItem>
          <ListItem>🆙 E0.6 UP! button</ListItem>
          <ListItem>🆚 E0.6 VS button</ListItem>
          <ListItem>🈁 E0.6 Japanese “here” button</ListItem>
          <ListItem>🈂️ E0.6 Japanese “service charge” button</ListItem>
          <ListItem>🈷️ E0.6 Japanese “monthly amount” button</ListItem>
          <ListItem>🈶 E0.6 Japanese “not free of charge” button</ListItem>
          <ListItem>🈯 E0.6 Japanese “reserved” button</ListItem>
          <ListItem>🉐 E0.6 Japanese “bargain” button</ListItem>
          <ListItem>🈹 E0.6 Japanese “discount” button</ListItem>
          <ListItem>🈚 E0.6 Japanese “free of charge” button</ListItem>
          <ListItem>🈲 E0.6 Japanese “prohibited” button</ListItem>
          <ListItem>🉑 E0.6 Japanese “acceptable” button</ListItem>
          <ListItem>🈸 E0.6 Japanese “application” button</ListItem>
          <ListItem>🈴 E0.6 Japanese “passing grade” button</ListItem>
          <ListItem>🈳 E0.6 Japanese “vacancy” button</ListItem>
          <ListItem>㊗️ E0.6 Japanese “congratulations” button</ListItem>
          <ListItem>㊙️ E0.6 Japanese “secret” button</ListItem>
          <ListItem>🈺 E0.6 Japanese “open for business” button</ListItem>
          <ListItem>🈵 E0.6 Japanese “no vacancy” button</ListItem>
          <ListItem>🔴 E0.6 red circle</ListItem>
          <ListItem>🟠 E12.0 orange circle</ListItem>
          <ListItem>🟡 E12.0 yellow circle</ListItem>
          <ListItem>🟢 E12.0 green circle</ListItem>
          <ListItem>🔵 E0.6 blue circle</ListItem>
          <ListItem>🟣 E12.0 purple circle</ListItem>
          <ListItem>🟤 E12.0 brown circle</ListItem>
          <ListItem>⚫ E0.6 black circle</ListItem>
          <ListItem>⚪ E0.6 white circle</ListItem>
          <ListItem>🟥 E12.0 red square</ListItem>
          <ListItem>🟧 E12.0 orange square</ListItem>
          <ListItem>🟨 E12.0 yellow square</ListItem>
          <ListItem>🟩 E12.0 green square</ListItem>
          <ListItem>🟦 E12.0 blue square</ListItem>
          <ListItem>🟪 E12.0 purple square</ListItem>
          <ListItem>🟫 E12.0 brown square</ListItem>
          <ListItem>⬛ E0.6 black large square</ListItem>
          <ListItem>⬜ E0.6 white large square</ListItem>
          <ListItem>◼️ E0.6 black medium square</ListItem>
          <ListItem>◻️ E0.6 white medium square</ListItem>
          <ListItem>◾ E0.6 black medium-small square</ListItem>
          <ListItem>◽ E0.6 white medium-small square</ListItem>
          <ListItem>▪️ E0.6 black small square</ListItem>
          <ListItem>▫️ E0.6 white small square</ListItem>
          <ListItem>🔶 E0.6 large orange diamond</ListItem>
          <ListItem>🔷 E0.6 large blue diamond</ListItem>
          <ListItem>🔸 E0.6 small orange diamond</ListItem>
          <ListItem>🔹 E0.6 small blue diamond</ListItem>
          <ListItem>🔺 E0.6 red triangle pointed up</ListItem>
          <ListItem>🔻 E0.6 red triangle pointed down</ListItem>
          <ListItem>💠 E0.6 diamond with a dot</ListItem>
          <ListItem>🔘 E0.6 radio button</ListItem>
          <ListItem>🔳 E0.6 white square button</ListItem>
          <ListItem>🔲 E0.6 black square button</ListItem>
          <ListItem>🏁 E0.6 chequered flag</ListItem>
          <ListItem>🚩 E0.6 triangular flag</ListItem>
          <ListItem>🎌 E0.6 crossed flags</ListItem>
          <ListItem>🏴 E1.0 black flag</ListItem>
          <ListItem>🏳️ E0.7 white flag</ListItem>
          <ListItem>🏳️‍🌈 E4.0 rainbow flag</ListItem>
          <ListItem>🏳️‍⚧️ E13.0 transgender flag</ListItem>
          <ListItem>🏴‍☠️ E11.0 pirate flag</ListItem>
          <ListItem>🇦🇨 E2.0 flag: Ascension Island</ListItem>
          <ListItem>🇦🇩 E2.0 flag: Andorra</ListItem>
          <ListItem>🇦🇪 E2.0 flag: United Arab Emirates</ListItem>
          <ListItem>🇦🇫 E2.0 flag: Afghanistan</ListItem>
          <ListItem>🇦🇬 E2.0 flag: Antigua & Barbuda</ListItem>
          <ListItem>🇦🇮 E2.0 flag: Anguilla</ListItem>
          <ListItem>🇦🇱 E2.0 flag: Albania</ListItem>
          <ListItem>🇦🇲 E2.0 flag: Armenia</ListItem>
          <ListItem>🇦🇴 E2.0 flag: Angola</ListItem>
          <ListItem>🇦🇶 E2.0 flag: Antarctica</ListItem>
          <ListItem>🇦🇷 E2.0 flag: Argentina</ListItem>
          <ListItem>🇦🇸 E2.0 flag: American Samoa</ListItem>
          <ListItem>🇦🇹 E2.0 flag: Austria</ListItem>
          <ListItem>🇦🇺 E2.0 flag: Australia</ListItem>
          <ListItem>🇦🇼 E2.0 flag: Aruba</ListItem>
          <ListItem>🇦🇽 E2.0 flag: Åland Islands</ListItem>
          <ListItem>🇦🇿 E2.0 flag: Azerbaijan</ListItem>
          <ListItem>🇧🇦 E2.0 flag: Bosnia & Herzegovina</ListItem>
          <ListItem>🇧🇧 E2.0 flag: Barbados</ListItem>
          <ListItem>🇧🇩 E2.0 flag: Bangladesh</ListItem>
          <ListItem>🇧🇪 E2.0 flag: Belgium</ListItem>
          <ListItem>🇧🇫 E2.0 flag: Burkina Faso</ListItem>
          <ListItem>🇧🇬 E2.0 flag: Bulgaria</ListItem>
          <ListItem>🇧🇭 E2.0 flag: Bahrain</ListItem>
          <ListItem>🇧🇮 E2.0 flag: Burundi</ListItem>
          <ListItem>🇧🇯 E2.0 flag: Benin</ListItem>
          <ListItem>🇧🇱 E2.0 flag: St. Barthélemy</ListItem>
          <ListItem>🇧🇲 E2.0 flag: Bermuda</ListItem>
          <ListItem>🇧🇳 E2.0 flag: Brunei</ListItem>
          <ListItem>🇧🇴 E2.0 flag: Bolivia</ListItem>
          <ListItem>🇧🇶 E2.0 flag: Caribbean Netherlands</ListItem>
          <ListItem>🇧🇷 E2.0 flag: Brazil</ListItem>
          <ListItem>🇧🇸 E2.0 flag: Bahamas</ListItem>
          <ListItem>🇧🇹 E2.0 flag: Bhutan</ListItem>
          <ListItem>🇧🇻 E2.0 flag: Bouvet Island</ListItem>
          <ListItem>🇧🇼 E2.0 flag: Botswana</ListItem>
          <ListItem>🇧🇾 E2.0 flag: Belarus</ListItem>
          <ListItem>🇧🇿 E2.0 flag: Belize</ListItem>
          <ListItem>🇨🇦 E2.0 flag: Canada</ListItem>
          <ListItem>🇨🇨 E2.0 flag: Cocos (Keeling) Islands</ListItem>
          <ListItem>🇨🇩 E2.0 flag: Congo - Kinshasa</ListItem>
          <ListItem>🇨🇫 E2.0 flag: Central African Republic</ListItem>
          <ListItem>🇨🇬 E2.0 flag: Congo - Brazzaville</ListItem>
          <ListItem>🇨🇭 E2.0 flag: Switzerland</ListItem>
          <ListItem>🇨🇮 E2.0 flag: Côte d’Ivoire</ListItem>
          <ListItem>🇨🇰 E2.0 flag: Cook Islands</ListItem>
          <ListItem>🇨🇱 E2.0 flag: Chile</ListItem>
          <ListItem>🇨🇲 E2.0 flag: Cameroon</ListItem>
          <ListItem>🇨🇳 E0.6 flag: China</ListItem>
          <ListItem>🇨🇴 E2.0 flag: Colombia</ListItem>
          <ListItem>🇨🇵 E2.0 flag: Clipperton Island</ListItem>
          <ListItem>🇨🇷 E2.0 flag: Costa Rica</ListItem>
          <ListItem>🇨🇺 E2.0 flag: Cuba</ListItem>
          <ListItem>🇨🇻 E2.0 flag: Cape Verde</ListItem>
          <ListItem>🇨🇼 E2.0 flag: Curaçao</ListItem>
          <ListItem>🇨🇽 E2.0 flag: Christmas Island</ListItem>
          <ListItem>🇨🇾 E2.0 flag: Cyprus</ListItem>
          <ListItem>🇨🇿 E2.0 flag: Czechia</ListItem>
          <ListItem>🇩🇪 E0.6 flag: Germany</ListItem>
          <ListItem>🇩🇬 E2.0 flag: Diego Garcia</ListItem>
          <ListItem>🇩🇯 E2.0 flag: Djibouti</ListItem>
          <ListItem>🇩🇰 E2.0 flag: Denmark</ListItem>
          <ListItem>🇩🇲 E2.0 flag: Dominica</ListItem>
          <ListItem>🇩🇴 E2.0 flag: Dominican Republic</ListItem>
          <ListItem>🇩🇿 E2.0 flag: Algeria</ListItem>
          <ListItem>🇪🇦 E2.0 flag: Ceuta & Melilla</ListItem>
          <ListItem>🇪🇨 E2.0 flag: Ecuador</ListItem>
          <ListItem>🇪🇪 E2.0 flag: Estonia</ListItem>
          <ListItem>🇪🇬 E2.0 flag: Egypt</ListItem>
          <ListItem>🇪🇭 E2.0 flag: Western Sahara</ListItem>
          <ListItem>🇪🇷 E2.0 flag: Eritrea</ListItem>
          <ListItem>🇪🇸 E0.6 flag: Spain</ListItem>
          <ListItem>🇪🇹 E2.0 flag: Ethiopia</ListItem>
          <ListItem>🇪🇺 E2.0 flag: European Union</ListItem>
          <ListItem>🇫🇮 E2.0 flag: Finland</ListItem>
          <ListItem>🇫🇯 E2.0 flag: Fiji</ListItem>
          <ListItem>🇫🇰 E2.0 flag: Falkland Islands</ListItem>
          <ListItem>🇫🇲 E2.0 flag: Micronesia</ListItem>
          <ListItem>🇫🇴 E2.0 flag: Faroe Islands</ListItem>
          <ListItem>🇫🇷 E0.6 flag: France</ListItem>
          <ListItem>🇬🇦 E2.0 flag: Gabon</ListItem>
          <ListItem>🇬🇧 E0.6 flag: United Kingdom</ListItem>
          <ListItem>🇬🇩 E2.0 flag: Grenada</ListItem>
          <ListItem>🇬🇪 E2.0 flag: Georgia</ListItem>
          <ListItem>🇬🇫 E2.0 flag: French Guiana</ListItem>
          <ListItem>🇬🇬 E2.0 flag: Guernsey</ListItem>
          <ListItem>🇬🇭 E2.0 flag: Ghana</ListItem>
          <ListItem>🇬🇮 E2.0 flag: Gibraltar</ListItem>
          <ListItem>🇬🇱 E2.0 flag: Greenland</ListItem>
          <ListItem>🇬🇲 E2.0 flag: Gambia</ListItem>
          <ListItem>🇬🇳 E2.0 flag: Guinea</ListItem>
          <ListItem>🇬🇵 E2.0 flag: Guadeloupe</ListItem>
          <ListItem>🇬🇶 E2.0 flag: Equatorial Guinea</ListItem>
          <ListItem>🇬🇷 E2.0 flag: Greece</ListItem>
          <ListItem>🇬🇸 E2.0 flag: South Georgia & South Sandwich Islands</ListItem>
          <ListItem>🇬🇹 E2.0 flag: Guatemala</ListItem>
          <ListItem>🇬🇺 E2.0 flag: Guam</ListItem>
          <ListItem>🇬🇼 E2.0 flag: Guinea-Bissau</ListItem>
          <ListItem>🇬🇾 E2.0 flag: Guyana</ListItem>
          <ListItem>🇭🇰 E2.0 flag: Hong Kong SAR China</ListItem>
          <ListItem>🇭🇲 E2.0 flag: Heard & McDonald Islands</ListItem>
          <ListItem>🇭🇳 E2.0 flag: Honduras</ListItem>
          <ListItem>🇭🇷 E2.0 flag: Croatia</ListItem>
          <ListItem>🇭🇹 E2.0 flag: Haiti</ListItem>
          <ListItem>🇭🇺 E2.0 flag: Hungary</ListItem>
          <ListItem>🇮🇨 E2.0 flag: Canary Islands</ListItem>
          <ListItem>🇮🇩 E2.0 flag: Indonesia</ListItem>
          <ListItem>🇮🇪 E2.0 flag: Ireland</ListItem>
        </UnorderedList>
      )}
      {!props.showFullList && (
        <UnorderedList style={{ fontSize: 22 }}>
          <ListItem>😊 - Smiling Face with Smiling Eyes</ListItem>
          <ListItem>😂 - Face with Tears of Joy</ListItem>
          <ListItem>👍 - Thumbs Up</ListItem>
          <ListItem>❤️ - Red Heart</ListItem>
          <ListItem>🙌 - Raising Hands</ListItem>
          <ListItem>🎉 - Party Popper</ListItem>
          <ListItem>🌟 - Glowing Star</ListItem>
          <ListItem>🌎 - Earth Globe</ListItem>
          <ListItem>🌺 - Hibiscus</ListItem>
          <ListItem>🔥 - Fire</ListItem>
          <ListItem>🚀 - Rocket</ListItem>
          <ListItem>🐶 - Dog Face</ListItem>
          <ListItem>🐱 - Cat Face</ListItem>
          <ListItem>🦁 - Lion Face</ListItem>
          <ListItem>🦋 - Butterfly</ListItem>
          <ListItem>🍎 - Apple</ListItem>
          <ListItem>🍕 - Pizza</ListItem>
          <ListItem>🍣 - Sushi</ListItem>
          <ListItem>🍦 - Soft Ice Cream</ListItem>
          <ListItem>☕ - Hot Beverage</ListItem>
          <ListItem>🍻 - Clinking Beer Mugs</ListItem>
          <ListItem>🌭 - Hot Dog</ListItem>
          <ListItem>🍔 - Hamburger</ListItem>
          <ListItem>🍩 - Doughnut</ListItem>
          <ListItem>🌈 - Rainbow</ListItem>
          <ListItem>🌧️ - Cloud with Rain</ListItem>
          <ListItem>☀️ - Sun with Face</ListItem>
          <ListItem>❄️ - Snowflake</ListItem>
          <ListItem>🌻 - Sunflower</ListItem>
          <ListItem>🍀 - Four Leaf Clover</ListItem>
          <ListItem>🏖️ - Beach with Umbrella</ListItem>
          <ListItem>🎶 - Musical Notes</ListItem>
          <ListItem>🎨 - Artist Palette</ListItem>
          <ListItem>🎮 - Video Game</ListItem>
          <ListItem>🖥️ - Desktop Computer</ListItem>
          <ListItem>📚 - Books</ListItem>
          <ListItem>✈️ - Airplane</ListItem>
          <ListItem>🚗 - Automobile</ListItem>
          <ListItem>🚢 - Ship</ListItem>
          <ListItem>⛷️ - Skier</ListItem>
          <ListItem>🚴 - Man Biking</ListItem>
          <ListItem>⚽ - Soccer Ball</ListItem>
          <ListItem>🏀 - Basketball</ListItem>
          <ListItem>🎾 - Tennis</ListItem>
          <ListItem>🎳 - Bowling</ListItem>
          <ListItem>🎯 - Bullseye</ListItem>
          <ListItem>🏆 - Trophy</ListItem>
          <ListItem>⛸️ - Ice Skate</ListItem>
          <ListItem>🎤 - Microphone</ListItem>
          <ListItem>🎬 - Clapper Board</ListItem>
          <ListItem>💻 - Laptop</ListItem>
          <ListItem>📸 - Camera</ListItem>
          <ListItem>📅 - Calendar</ListItem>
          <ListItem>⏰ - Alarm Clock</ListItem>
          <ListItem>🔒 - Lock</ListItem>
          <ListItem>🗝️ - Key</ListItem>
          <ListItem>📦 - Package</ListItem>
          <ListItem>🔍 - Magnifying Glass</ListItem>
          <ListItem>⚡ - High Voltage</ListItem>
          <ListItem>💡 - Light Bulb</ListItem>
          <ListItem>🕯️ - Candle</ListItem>
          <ListItem>🌙 - Crescent Moon</ListItem>
          <ListItem>🔮 - Crystal Ball</ListItem>
          <ListItem>🧸 - Teddy Bear</ListItem>
          <ListItem>🎁 - Wrapped Gift</ListItem>
          <ListItem>🍾 - Bottle with Popping Cork</ListItem>
          <ListItem>💋 - Kiss Mark</ListItem>
          <ListItem>👋 - Waving Hand</ListItem>
          <ListItem>🤗 - Hugging Face</ListItem>
          <ListItem>😍 - Heart Eyes</ListItem>
          <ListItem>🤔 - Thinking Face</ListItem>
          <ListItem>😭 - Loudly Crying Face</ListItem>
          <ListItem>🥺 - Pleading Face</ListItem>
          <ListItem>😎 - Smiling Face with Sunglasses</ListItem>
          <ListItem>😴 - Sleeping Face</ListItem>
          <ListItem>🤩 - Star-Struck</ListItem>
          <ListItem>🙈 - See-No-Evil Monkey</ListItem>
          <ListItem>🎉 - Confetti Ball</ListItem>
          <ListItem>🌸 - Cherry Blossom</ListItem>
          <ListItem>🎇 - Sparkler</ListItem>
          <ListItem>🕊️ - Dove of Peace</ListItem>
          <ListItem>🍃 - Leaf Fluttering in Wind</ListItem>
          <ListItem>🎡 - Ferris Wheel</ListItem>
          <ListItem>🐢 - Turtle</ListItem>
          <ListItem>🐳 - Whale</ListItem>
          <ListItem>🦒 - Giraffe</ListItem>
          <ListItem>🌊 - Water Wave</ListItem>
          <ListItem>🔗 - Link</ListItem>
          <ListItem>🛣️ - Motorway</ListItem>
          <ListItem>🏞️ - National Park</ListItem>
          <ListItem>🏛️ - Classical Building</ListItem>
          <ListItem>🚧 - Construction Barrier</ListItem>
          <ListItem>🌌 - Milky Way</ListItem>
          <ListItem>🎢 - Roller Coaster</ListItem>
          <ListItem>🧗 - Person Climbing</ListItem>
          <ListItem>💪 - Flexed Bicep</ListItem>
          <ListItem>📖 - Open Book</ListItem>
          <ListItem>🧘 - Person in Lotus Position</ListItem>
          <ListItem>🌠 - Shooting Star</ListItem>
          <ListItem>🤝 - Handshake</ListItem>
        </UnorderedList>
      )}
    </PDFStory>
  );
};

// === Setup ===
const meta: Meta<typeof StoryComponent> = {
  title: 'Stories/Fonts/Emojis', // <-- Set to your story title
  component: StoryComponent,
  parameters: {
    options: { showPanel: false }, // Don't show addons panel
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// === Stories ===
export const JoyPixelsSampleOf100: Story = {
  args: {
    sourceName: 'JoyPixels - Sample of 100',
    emojiSource: Fonts.emojis.joyPixels(),
  },
};

export const NotoEmojiSampleOf100: Story = {
  args: {
    sourceName: 'NotoEmoji - Sample of 100',
    emojiSource: Fonts.emojis.notoEmoji(),
  },
};

export const OpenMojiColorSampleOf100: Story = {
  args: {
    sourceName: 'OpenMoji Color - Sample of 100',
    emojiSource: Fonts.emojis.openMojiColor(),
  },
};

export const OpenMojiBlackSampleOf100: Story = {
  args: {
    sourceName: 'OpenMoji Black - Sample of 100',
    emojiSource: Fonts.emojis.openMojiBlack(),
  },
};

export const TwemojiSampleOf100: Story = {
  args: {
    sourceName: 'Twemoji - Sample of 100',
    emojiSource: Fonts.emojis.twemoji(),
  },
};

export const JoyPixelsFullList: Story = {
  args: {
    sourceName: 'JoyPixels - Full List',
    emojiSource: Fonts.emojis.joyPixels(),
    showFullList: true,
  },
};

export const NotoEmojiFullList: Story = {
  args: {
    sourceName: 'NotoEmoji - Full List',
    emojiSource: Fonts.emojis.notoEmoji(),
    showFullList: true,
  },
};

export const OpenMojiFullList: Story = {
  args: {
    sourceName: 'OpenMoji - Full List',
    emojiSource: Fonts.emojis.openMojiColor(),
    showFullList: true,
  },
};

export const OpenMojiBlackFullList: Story = {
  args: {
    sourceName: 'OpenMoji Black - Full List',
    emojiSource: Fonts.emojis.openMojiBlack(),
    showFullList: true,
  },
};

export const TwemojiFullList: Story = {
  args: {
    sourceName: 'Twemoji - Full List',
    emojiSource: Fonts.emojis.twemoji(),
    showFullList: true,
  },
};
