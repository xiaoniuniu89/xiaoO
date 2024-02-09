import { Button } from "@/components/ui/button";

const SidePanel = () => {

    return (
        <div className="w-60 shadow-md sidepanel bg-vita-orange min-h-screen">
            <Button
                onClick={() => null}
                variant="link"
                className="block px-4 py-2 text-gray-800 hover:text-gray-600"
            >
                Chat One
            </Button>
            <Button
                onClick={() => null}
                variant="link"
                className="block px-4 py-2 text-gray-800 hover:text-gray-600"
            >
                Chat Two
            </Button>
        </div>
    );
};

export default SidePanel;
