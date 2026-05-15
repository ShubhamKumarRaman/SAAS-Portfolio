const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className='mb-10 text-center'>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>

            <p className='text-slate-400 max-w-2xl mx-auto'>
                {subtitle}
            </p>
        </div>
    )
}

export default SectionTitle