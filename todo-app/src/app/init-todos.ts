export class Init {
    load() {
        if (localStorage.getItem('todos') === null || localStorage.getItem('todos') === undefined
        || localStorage.getItem('todos') === '[]') {
            const todos = [
                {
                    text: 'cook breakfast and lunch'
                },
                {
                    text: 'drive to office'
                },
                {
                    text: 'write document and submit report'
                }
            ];

            localStorage.setItem('todos', JSON.stringify(todos));
            return;
        // tslint:disable-next-line:one-line
        } else{
            console.log('found todos');
        }
    }
// tslint:disable-next-line:eofline
}