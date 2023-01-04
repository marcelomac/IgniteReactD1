import styles from "./Status.module.css";

interface iTaskProps {
  title: string,
  titleStyle: React.CSSProperties,
  values: string
}

export function Status({title, titleStyle, values}: iTaskProps) {
  return (
    <div className={styles.status}>
      <strong style={titleStyle}>{title}</strong>
      <span>{values}</span>
    </div>
  );
}
