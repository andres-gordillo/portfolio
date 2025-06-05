


export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card relative border-t border mt-12 pt-8 flex flex-wtap justify-between">
            {" "}
            <p className="text-sm text-muted-foreground">
                {" "}
                &copy; {new Date().getFullYear()} Andres Gordillo
            </p>
        </footer>
    )
}