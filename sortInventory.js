const getSort = (inventory, filters) => {
    return inventory.sort((a, b) => {
        let res = null;

        //compare all filters to a & b
        for (let i in filters) {
            if (res !== null) {
                res = (b[filters[i]] > a[filters[i]]) - (a[filters[i]] > b[filters[i]]) || res;
            } else {
                res = (b[filters[i]] > a[filters[i]]) - (a[filters[i]] > b[filters[i]]);
            }

        }

        return res;

    })
}

let getCompare = (item, next, stack) => {

    let sum = item.count + next.count;

    // full stack
    if (sum === stack) return { item: stack, next: 0, action: "stack" };

    // more then stack
    if (sum > stack) return { item: stack, next: sum - stack, action: "more" };

    // less then stack
    if (sum < stack) return { item: 0, next: sum, action: "less" };

}

module.exports = (inventory) => {
    let newInventory = [];
    let sorted = getSort(inventory.data, inventory.condition.sort_by);
    let stack = inventory.condition.container_size;

    sorted.map((item, i) => {
        let next = sorted[i + 1];

        //  last item or last item this type or full stack
        if (!next || (item.name !== next.name) || (item.count >= stack)) newInventory.push(item);


        else {
            //every step we compare the sum of the current and the next item
            let compare = getCompare(item, next, stack);

            //
            if ((compare.action === "stack") || (compare.action === "more")) {
                item.count = compare.item;
                newInventory.push(item);
                next.count = compare.next;
            }

            if (compare.action === "less") {
                item.count = compare.item;
                next.count = compare.next;
            }
        }
    })

    return newInventory
}
