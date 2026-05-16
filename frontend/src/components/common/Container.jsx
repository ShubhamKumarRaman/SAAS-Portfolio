const Container = ({ children, className }) => {
    return (
        <div className={`w-[90%] max-w-7xl mx-auto ${className}`}>
            {children}
        </div>
    );
};

export default Container;