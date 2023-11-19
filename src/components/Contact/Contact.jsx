import "./Contact.css";

export default function Contact({ image, contact, contactLink }) {
  return (
    <div className="containerContact">
      <img src={require(`../../images/${image}.svg`)} alt={image} />
      <a href={contactLink} target="_blank">
        {contact}
      </a>
    </div>
  );
}
