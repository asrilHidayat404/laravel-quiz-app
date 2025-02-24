const CardS2 = ({ order, text }: { order: string; text: string }) => {
    return (
        <div className="flex w-[400px] items-center gap-5 rounded-md border-l border-white px-10 py-6">
            <p className="text-3xl font-bold text-blue-600">{order}</p>
            <p className="text-sm">{text}</p>
        </div>
    );
};

export default CardS2;
