import {baseType} from "./types";

const ViewElements = ({
                          viewData,
                          setSelectedItem,
                          setDataItemSelect,
                          selectedItemId
                      }: {
    viewData: baseType[];
    setSelectedItem: (id: string) => void;
    setDataItemSelect: (item: baseType) => void;
    selectedItemId: string
}) => {
    interface RenderOptions {
        [key: string]: (
            id: string,
            title: string,
            width: number,
            height: number,
            fontSize?: number,
            selectItem?: string[]
        ) => JSX.Element;
    }

    console.log("viewData", viewData);


    const renderOptions: RenderOptions = {
        text: (id, title, width, height, fontSize) => (
            <h1 style={{fontSize: `${fontSize}px`}}>{title}</h1>
        ),
        button: (id, title, width, height) => (
            <button style={{width: "100%", height: "100%"}}>{title}</button>
        ),
        select: ({id, title, selectItem}) => (
            <select>
                {selectItem.map(item =>
                    <option>{item}</option>
                )}
            </select>

        ),
    };

    const handleItemClick = (item: baseType) => {
        setSelectedItem(item.id);
        setDataItemSelect(item);

    };


    console.log("viewDatta", viewData);
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(24,1fr)",
                gridTemplateRows: "repeat(24,1fr)",
                gridGap: "10px",
                backgroundColor: "green",
            }}
        >
            {viewData.map((item) => (
                <div
                    key={item.id}
                    onClick={() => handleItemClick(item)}
                    style={{
                        gridColumnEnd: `span ${item.width}`,
                        gridRowEnd: `span ${item.height}`,
                        color: `${item?.color}`,
                        display: item?.display,
                        justifyContent: item?.justifyContent,
                        alignItems: item?.alignItem,
                    }}
                >
                    {item.type in renderOptions &&
                        renderOptions[item.type]({id: item?.id, title: item?.title, selectItem: item?.selectItem})}
                </div>
            ))}
        </div>
    );
};

export default ViewElements;
