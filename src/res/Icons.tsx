import Svg, {Path} from "react-native-svg";
import {ViewStyle} from "react-native";
import React from "react";


interface IconProps {
    size: number,
    color?: string,
    style?: ViewStyle
}

export const CalendarIcon = (props: IconProps) => (
    <Svg viewBox='0 0 50 50' width={props.size} height={props.size}>
        <Path
            d='M 11.90625 0 C 10.820313 0 9.921875 0.898438 9.921875 1.984375 L 9.921875 3.96875 L 3.96875 3.96875 C 3.449219 3.96875 2.921875 4.15625 2.550781 4.535156 C 2.175781 4.90625 1.984375 5.433594 1.984375 5.953125 L 1.984375 45.636719 C 1.984375 46.152344 2.175781 46.679688 2.550781 47.058594 C 2.921875 47.429688 3.449219 47.617188 3.96875 47.617188 L 45.636719 47.617188 C 46.152344 47.617188 46.679688 47.429688 47.058594 47.058594 C 47.429688 46.679688 47.617188 46.152344 47.617188 45.636719 L 47.617188 5.953125 C 47.617188 5.433594 47.429688 4.90625 47.058594 4.535156 C 46.679688 4.15625 46.152344 3.96875 45.636719 3.96875 L 39.683594 3.96875 L 39.683594 1.984375 C 39.683594 0.898438 38.785156 0 37.699219 0 L 35.714844 0 C 34.628906 0 33.730469 0.898438 33.730469 1.984375 L 33.730469 3.96875 L 15.871094 3.96875 L 15.871094 1.984375 C 15.871094 0.898438 14.972656 0 13.890625 0 Z M 11.90625 1.984375 L 13.890625 1.984375 L 13.890625 7.9375 L 11.90625 7.9375 Z M 35.714844 1.984375 L 37.699219 1.984375 L 37.699219 7.9375 L 35.714844 7.9375 Z M 3.96875 5.953125 L 9.921875 5.953125 L 9.921875 7.9375 C 9.921875 9.023438 10.820313 9.921875 11.90625 9.921875 L 13.890625 9.921875 C 14.972656 9.921875 15.871094 9.023438 15.871094 7.9375 L 15.871094 5.953125 L 33.730469 5.953125 L 33.730469 7.9375 C 33.730469 9.023438 34.628906 9.921875 35.714844 9.921875 L 37.699219 9.921875 C 38.785156 9.921875 39.683594 9.023438 39.683594 7.9375 L 39.683594 5.953125 L 45.636719 5.953125 L 45.636719 12.898438 L 3.96875 12.898438 Z M 3.96875 14.882813 L 45.636719 14.882813 L 45.636719 45.636719 L 3.96875 45.636719 Z M 9.921875 18.847656 L 9.921875 41.667969 L 39.683594 41.667969 L 39.683594 18.847656 Z M 11.90625 20.832031 L 16.863281 20.832031 L 16.863281 25.792969 L 11.90625 25.792969 Z M 18.847656 20.832031 L 23.808594 20.832031 L 23.808594 25.792969 L 18.847656 25.792969 Z M 25.792969 20.832031 L 30.753906 20.832031 L 30.753906 25.792969 L 25.792969 25.792969 Z M 32.738281 20.832031 L 37.699219 20.832031 L 37.699219 25.792969 L 32.738281 25.792969 Z M 11.90625 27.777344 L 16.863281 27.777344 L 16.863281 32.738281 L 11.90625 32.738281 Z M 18.847656 27.777344 L 23.808594 27.777344 L 23.808594 32.738281 L 18.847656 32.738281 Z M 25.792969 27.777344 L 30.753906 27.777344 L 30.753906 32.738281 L 25.792969 32.738281 Z M 32.738281 27.777344 L 37.699219 27.777344 L 37.699219 32.738281 L 32.738281 32.738281 Z M 11.90625 34.722656 L 16.863281 34.722656 L 16.863281 39.683594 L 11.90625 39.683594 Z M 18.847656 34.722656 L 23.808594 34.722656 L 23.808594 39.683594 L 18.847656 39.683594 Z M 25.792969 34.722656 L 30.753906 34.722656 L 30.753906 39.683594 L 25.792969 39.683594 Z M 32.738281 34.722656 L 37.699219 34.722656 L 37.699219 39.683594 L 32.738281 39.683594 Z '
            fill={props.color}
        />
    </Svg>
);

export const FAQIcon = (props: IconProps) => (
    <Svg viewBox='0 0 50 50' width={props.size} height={props.size}>
        <Path
            d='M 21.824219 0 C 19.632813 0 17.855469 1.773438 17.855469 3.96875 L 17.855469 19.839844 C 17.855469 22.035156 19.632813 23.808594 21.824219 23.808594 L 37.328125 23.808594 L 44.984375 30.507813 C 45.277344 30.761719 45.6875 30.820313 46.046875 30.660156 C 46.398438 30.503906 46.628906 30.148438 46.628906 29.761719 L 46.628906 23.625 C 48.328125 23.179688 49.601563 21.683594 49.601563 19.839844 L 49.601563 3.96875 C 49.601563 1.773438 47.828125 0 45.636719 0 Z M 21.824219 1.984375 L 45.636719 1.984375 C 46.816406 1.984375 47.617188 2.785156 47.617188 3.96875 L 47.617188 19.839844 C 47.617188 21.023438 46.816406 21.824219 45.636719 21.824219 C 45.089844 21.824219 44.644531 22.269531 44.644531 22.816406 L 44.644531 27.589844 L 38.347656 22.074219 C 38.171875 21.914063 37.9375 21.824219 37.699219 21.824219 L 21.824219 21.824219 C 20.644531 21.824219 19.839844 21.023438 19.839844 19.839844 L 19.839844 3.96875 C 19.839844 2.785156 20.644531 1.984375 21.824219 1.984375 Z M 32.738281 6.046875 L 30.257813 17.453125 L 32.054688 17.453125 L 32.644531 14.476563 L 34.816406 14.476563 L 35.402344 17.453125 L 37.203125 17.453125 L 34.816406 6.046875 Z M 33.730469 7.9375 L 33.824219 7.9375 C 33.925781 8.730469 34.027344 9.816406 34.226563 10.507813 L 34.722656 13.082031 L 32.832031 13.082031 L 33.328125 10.507813 C 33.429688 9.816406 33.628906 8.730469 33.730469 7.9375 Z M 3.96875 18.847656 C 1.773438 18.847656 0 20.625 0 22.816406 L 0 38.691406 C 0 40.53125 1.273438 42.027344 2.976563 42.472656 L 2.976563 48.609375 C 2.976563 49 3.203125 49.351563 3.558594 49.511719 C 3.914063 49.667969 4.324219 49.609375 4.621094 49.355469 L 12.277344 42.660156 L 27.777344 42.660156 C 29.972656 42.660156 31.746094 40.882813 31.746094 38.691406 L 31.746094 24.800781 L 29.761719 24.800781 L 29.761719 38.691406 C 29.761719 39.871094 28.960938 40.675781 27.777344 40.675781 L 11.90625 40.675781 C 11.664063 40.675781 11.433594 40.765625 11.253906 40.921875 L 4.960938 46.441406 L 4.960938 41.667969 C 4.960938 41.121094 4.515625 40.675781 3.96875 40.675781 C 2.785156 40.675781 1.984375 39.871094 1.984375 38.691406 L 1.984375 22.816406 C 1.984375 21.636719 2.785156 20.832031 3.96875 20.832031 L 16.863281 20.832031 L 16.863281 18.847656 Z M 15.46875 24.800781 C 13.1875 24.800781 11.90625 27.195313 11.90625 30.566406 C 11.90625 34.433594 13.199219 36.394531 15.285156 36.394531 C 15.382813 36.394531 15.582031 36.511719 15.78125 36.613281 C 16.472656 37.007813 17.648438 37.613281 18.539063 38.007813 L 19.160156 36.613281 C 18.464844 36.414063 17.652344 36.105469 16.957031 35.808594 L 16.957031 35.714844 C 18.050781 35.117188 18.757813 33.421875 18.757813 30.445313 C 18.757813 27.367188 17.847656 24.800781 15.46875 24.800781 Z M 15.378906 26.289063 C 16.46875 26.289063 16.863281 28.261719 16.863281 30.445313 C 16.863281 32.824219 16.46875 34.816406 15.378906 34.816406 C 14.1875 34.816406 13.796875 32.824219 13.796875 30.445313 C 13.796875 28.359375 14.1875 26.289063 15.378906 26.289063 Z '
            fill={props.color}
        />
    </Svg>
);

export const ProfileIcon = (props: IconProps) => (
    <Svg viewBox='0 0 50 50' width={props.size} height={props.size}>
        <Path
            d='M 24.800781 2.976563 C 19.308594 2.976563 14.882813 7.40625 14.882813 12.898438 L 14.882813 18.847656 C 14.882813 22.0625 16.453125 24.945313 18.847656 26.753906 L 18.847656 31.25 C 18.847656 31.355469 18.828125 31.445313 18.570313 31.683594 C 18.308594 31.925781 17.847656 32.246094 17.238281 32.550781 C 16.015625 33.164063 14.253906 33.792969 12.460938 34.660156 C 10.671875 35.527344 8.816406 36.632813 7.378906 38.226563 C 5.941406 39.816406 4.960938 41.953125 4.960938 44.644531 L 4.960938 45.636719 L 44.644531 45.636719 L 44.644531 44.644531 C 44.644531 41.929688 43.664063 39.789063 42.226563 38.195313 C 40.785156 36.601563 38.929688 35.515625 37.140625 34.660156 C 35.351563 33.804688 33.582031 33.15625 32.367188 32.550781 C 31.757813 32.25 31.289063 31.957031 31.03125 31.714844 C 30.777344 31.476563 30.753906 31.375 30.753906 31.25 L 30.753906 26.753906 C 33.148438 24.945313 34.722656 22.0625 34.722656 18.847656 L 34.722656 12.898438 C 34.722656 7.40625 30.292969 2.976563 24.800781 2.976563 Z M 24.800781 4.960938 C 29.230469 4.960938 32.738281 8.46875 32.738281 12.898438 L 32.738281 18.847656 C 32.738281 21.585938 31.308594 24.050781 29.203125 25.453125 L 28.769531 25.761719 L 28.769531 31.25 C 28.769531 32.015625 29.164063 32.695313 29.667969 33.171875 C 30.171875 33.648438 30.804688 34.003906 31.496094 34.351563 C 32.886719 35.039063 34.589844 35.652344 36.273438 36.457031 C 37.953125 37.265625 39.570313 38.238281 40.738281 39.527344 C 41.707031 40.597656 42.265625 41.96875 42.472656 43.652344 L 7.128906 43.652344 C 7.335938 41.988281 7.902344 40.632813 8.867188 39.558594 C 10.03125 38.265625 11.648438 37.277344 13.332031 36.457031 C 15.011719 35.640625 16.722656 35.007813 18.105469 34.320313 C 18.796875 33.972656 19.433594 33.609375 19.933594 33.140625 C 20.433594 32.671875 20.832031 32.011719 20.832031 31.25 L 20.832031 25.761719 L 20.398438 25.453125 C 18.296875 24.050781 16.863281 21.585938 16.863281 18.847656 L 16.863281 12.898438 C 16.863281 8.46875 20.371094 4.960938 24.800781 4.960938 Z '
            fill={props.color}
        />
    </Svg>
);


export const ProfileCalendarIcon = (props: IconProps) => (
    <Svg viewBox='0 0 50 50' width={props.size} height={props.size}>
        <Path
            d='M 21.876953 3.3007812 C 17.184533 3.406229 14.20951 5.3290644 12.933594 8.2636719 C 11.714522 11.067537 11.981503 14.578081 12.855469 18.248047 C 12.393608 18.79523 12.007846 19.535562 12.103516 20.683594 L 12.105469 20.708984 L 12.109375 20.734375 C 12.275819 21.954963 12.613605 22.821637 13.080078 23.431641 C 13.307333 23.72882 13.636287 23.739105 13.917969 23.904297 C 14.072463 24.959206 14.354246 26.020614 14.751953 26.900391 C 14.978014 27.400465 15.221277 27.847201 15.478516 28.224609 C 15.595711 28.396553 15.772747 28.508474 15.900391 28.654297 L 15.900391 32.242188 C 15.581502 33.017359 14.832827 33.653312 13.628906 34.263672 C 12.379384 34.89715 10.748922 35.46202 9.0996094 36.183594 C 7.4502971 36.905168 5.7653379 37.790238 4.4257812 39.171875 C 3.0862247 40.553512 2.1387455 42.455692 2.0019531 44.945312 L 1.9433594 46 L 27 46 A 1.0001 1.0001 0 1 0 27 44 L 4.2324219 44 C 4.5046479 42.570551 5.0249815 41.427072 5.8613281 40.564453 C 6.9092714 39.48359 8.3497029 38.694051 9.9003906 38.015625 C 11.451078 37.337199 13.095225 36.77785 14.533203 36.048828 C 15.415677 35.601435 16.250345 35.071578 16.892578 34.375 C 17.210548 34.669894 17.589077 34.919799 17.992188 35.126953 C 19.070626 35.681151 20.457143 36 22 36 C 23.554762 36 24.946074 35.6495 26.017578 35.083984 C 27.026606 34.551442 27.882839 33.7998 27.980469 32.703125 A 1.0001 1.0001 0 0 0 28 32.5 L 28 28.654297 C 28.127643 28.508474 28.30468 28.396553 28.421875 28.224609 C 28.679113 27.847201 28.922377 27.400465 29.148438 26.900391 C 29.54299 26.027594 29.818397 24.973972 29.974609 23.927734 C 30.292472 23.764512 30.647799 23.754291 30.894531 23.431641 C 31.376036 22.801981 31.683419 21.917934 31.794922 20.691406 L 31.796875 20.6875 L 31.796875 20.683594 C 31.885125 19.624616 31.559244 18.868765 31.083984 18.289062 C 31.605323 16.687531 32.220519 14.136487 32.021484 11.511719 C 31.912477 10.074798 31.55598 8.6347332 30.701172 7.4414062 C 29.922603 6.3545109 28.657032 5.587044 27.066406 5.2539062 C 26.003473 3.8595809 24.092033 3.3007813 21.900391 3.3007812 L 21.888672 3.3007812 L 21.876953 3.3007812 z M 21.900391 5.3007812 L 21.902344 5.3007812 C 23.91919 5.301235 25.218839 5.8871508 25.636719 6.6035156 L 25.880859 7.0234375 L 26.361328 7.0898438 C 27.734567 7.2829555 28.516527 7.8269206 29.074219 8.6054688 C 29.631911 9.3840168 29.936304 10.463473 30.027344 11.664062 C 30.209424 14.065245 29.515727 16.884089 29.058594 18.164062 L 28.759766 18.998047 L 29.552734 19.394531 C 29.416078 19.326201 29.877153 19.62456 29.802734 20.517578 C 29.713264 21.482515 29.47242 21.997454 29.304688 22.216797 C 29.136191 22.437137 29.066276 22.400391 29.099609 22.400391 L 28.191406 22.400391 L 28.105469 23.304688 C 28.019959 24.202566 27.69905 25.25132 27.326172 26.076172 C 27.139733 26.488598 26.940418 26.846939 26.769531 27.097656 C 26.598645 27.348373 26.411755 27.484299 26.503906 27.431641 L 26 27.71875 L 26 32.5 C 26 32.48889 25.81248 32.931922 25.083984 33.316406 C 24.355488 33.70089 23.245238 34 22 34 C 20.742857 34 19.627812 33.718459 18.90625 33.347656 C 18.184688 32.976854 18 32.585897 18 32.5 A 1.0001 1.0001 0 0 0 17.900391 32.054688 L 17.900391 27.71875 L 17.396484 27.431641 C 17.488634 27.484301 17.301744 27.348371 17.130859 27.097656 C 16.959973 26.846939 16.760658 26.488598 16.574219 26.076172 C 16.201341 25.25132 15.880434 24.202566 15.794922 23.304688 L 15.708984 22.400391 L 14.800781 22.400391 C 14.950781 22.400391 14.853451 22.456791 14.669922 22.216797 C 14.489652 21.981059 14.237144 21.442621 14.101562 20.496094 C 14.053142 19.688481 14.537592 19.277022 14.455078 19.332031 L 15.042969 18.939453 L 14.869141 18.253906 C 13.946285 14.611057 13.793494 11.300939 14.767578 9.0605469 C 15.739768 6.8245094 17.709653 5.4003162 21.900391 5.3007812 z M 35 30 C 34.4 30 34 30.4 34 31 L 34 32 L 31.400391 32 C 30.600391 32 30 32.600391 30 33.400391 L 30 48.699219 C 30 49.399219 30.600391 50 31.400391 50 L 48.699219 50 C 49.499219 50 50 49.399609 50 48.599609 L 50 33.400391 C 49.9 32.600391 49.399609 32 48.599609 32 L 46 32 L 46 31 C 46 30.4 45.6 30 45 30 C 44.4 30 44 30.4 44 31 L 44 32 L 36 32 L 36 31 C 36 30.4 35.6 30 35 30 z M 32 34 L 34 34 C 34 34.6 34.4 35 35 35 C 35.6 35 36 34.6 36 34 L 44 34 C 44 34.6 44.4 35 45 35 C 45.6 35 46 34.6 46 34 L 48 34 L 48 36 L 32 36 L 32 34 z M 32 38 L 48 38 L 48 48 L 32 48 L 32 38 z M 35 40 L 35 42 L 37 42 L 37 40 L 35 40 z M 39 40 L 39 42 L 41 42 L 41 40 L 39 40 z M 43 40 L 43 42 L 45 42 L 45 40 L 43 40 z M 35 44 L 35 46 L 37 46 L 37 44 L 35 44 z M 39 44 L 39 46 L 41 46 L 41 44 L 39 44 z M 43 44 L 43 46 L 45 46 L 45 44 L 43 44 z'
            fill={props.color}
        />
    </Svg>
);


