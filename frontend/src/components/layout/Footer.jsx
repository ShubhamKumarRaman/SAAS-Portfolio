import Container from '../common/Container'

const Footer = () => {
    return (
        <footer className='border-t border-slate-800 py-10 mt-20'>
            <Container>
                <div className='text-center'>
                    <h2 className='text-2xl font-bold text-cyan-400 mb-3'>
                        Shubham Kumar
                    </h2>

                    <p className='text-slate-400'>
                        MERN Stack Developer • Building modern full-stack experiences.
                    </p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer