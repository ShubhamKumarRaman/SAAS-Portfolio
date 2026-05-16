import Container from "./Container";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 py-10 mt-20">
            <Container>
                <div className="flex flex-col md:flex-row justify-between gap-5">
                    <h2 className="text-xl font-bold">
                        Shubham Kumar
                    </h2>

                    <p className="text-gray-400">
                        © 2026 All Rights Reserved
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;