import { Card } from "react-bootstrap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const AboutUs = () => {
	return (
		<div className="abtus" id="about">
			<h2>About Us</h2>
			<p>Welcome to Kwik-E-Mart's inventory management system.</p>
			<div className="ourImage">
				<div>
					<Card
						className="person text-center"
						style={{ width: "15rem" }}>
						<Card.Img
							variant="top"
							src="/arihant.jpg"
							width="200"
							height="200"
							style={{ borderRadius: "50%" }}
						/>
						<Card.Body>
							<Card.Title>Arihant Bansal</Card.Title>
							<Card.Text>
								Junior Developer
								<br />
								DevSoc, BITS Goa
							</Card.Text>
							<i className="footer-icons">
								<a
									href="https://github.com/arihantbansal"
									target="_blank">
									<FaGithub size={25} />
								</a>
							</i>
							<i className="footer-icons">
								<a
									href="https://www.linkedin.com/in/arihantbansal/"
									target="_blank">
									<FaLinkedinIn size={25} />
								</a>
							</i>
						</Card.Body>
					</Card>
				</div>
				<div>
					<Card
						className="person text-center"
						style={{ width: "15rem" }}>
						<Card.Img
							variant="top"
							src="/ayush.jpg"
							width="200"
							height="200"
							style={{ borderRadius: "50%" }}
						/>
						<Card.Body>
							<Card.Title>Ayush Pal</Card.Title>
							<Card.Text>
								Junior Developer
								<br />
								DevSoc, BITS Goa
							</Card.Text>
							<i className="footer-icons">
								<a href="" target="_blank">
									<FaGithub size={25} />
								</a>
							</i>
							<i className="footer-icons">
								<a
									href="https://www.linkedin.com/in/ayush-pal-300b731b9/"
									target="_blank">
									<FaLinkedinIn size={25} />
								</a>
							</i>
						</Card.Body>
					</Card>
				</div>
				<div>
					<Card
						className="person text-center"
						style={{ width: "15rem" }}>
						<Card.Img
							variant="top"
							src="/logo192.png"
							width="200"
							height="200"
							style={{ borderRadius: "50%" }}
						/>
						<Card.Body>
							<Card.Title>Medha R S</Card.Title>
							<Card.Text>
								Junior Developer
								<br />
								DevSoc, BITS Goa
							</Card.Text>
							<i className="footer-icons">
								<a
									href="https://github.com/meeddhhaa"
									target="_blank">
									<FaGithub size={25} />
								</a>
							</i>
							<i className="footer-icons">
								<a
									href="https://www.linkedin.com/in/medha-rs/"
									target="_blank">
									<FaLinkedinIn size={25} />
								</a>
							</i>
						</Card.Body>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
