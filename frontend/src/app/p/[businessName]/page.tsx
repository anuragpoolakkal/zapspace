type Params = {
    params: {
        businessName: string
    }
}

export default function BusinessPage({ params: { businessName } }: Params) {
    return <div className="flex flex-col text-black">
        <p>{businessName}</p>
    </div>;
}