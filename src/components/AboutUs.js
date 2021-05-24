import { Card } from "react-bootstrap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const AboutUs = () => {
	return (
		<div className="abtus" id="about">
			<h2>About Us</h2>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam,
				nostrum dolores! Aut officia a laboriosam nam odit cupiditate
				veritatis odio eos incidunt mollitia assumenda necessitatibus
				fugiat, doloremque dicta, obcaecati sed? Explicabo quasi
				corrupti ad aliquid architecto recusandae inventore, nam magni
				vero dolore libero, illo odio, blanditiis dicta maxime
				accusantium illum deserunt. Sit reprehenderit temporibus odio
				earum pariatur harum nihil ullam? Optio, explicabo. Atque, id,
				adipisci ipsa animi voluptatem error praesentium, quaerat minus
				eum minima iure temporibus odit officia illo deserunt quae nam
				earum. Ratione consectetur eveniet facilis at, iste pariatur. F
				facere, officiis exercitationem, minima necessitatibus
				accusantium nihil molestias quibusdam magni!
			</p>
			<div className="ourImage">
				<div>
					<Card
						className="person text-center"
						style={{ width: "15rem" }}>
						<Card.Img
							variant="top"
							src="/logo192.png"
							width="200"
							height="200"
						/>
						<Card.Body>
							<Card.Title>Arihant Bansal</Card.Title>
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
								<a href="" target="_blank">
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
								<a href="" target="_blank">
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
						/>
						<Card.Body>
							<Card.Title>Medha R S</Card.Title>
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
								<a href="" target="_blank">
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
