type Props = {
  stroke?: string;
  fill?: string;
};

export default function HomeIcon({ stroke, fill }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      viewBox="100 -860 760 760"
    >
      <g class="fill-foreground">
        <path d="M240-200h133.847v-237.692h212.306V-200H720v-360L480-740.769 240-560v360Zm-59.999 59.999v-449.998L480-815.767l299.999 225.768v449.998H526.154v-237.693h-92.308v237.693H180.001ZM480-470.385Z" />
      </g>
    </svg>
  );
}
