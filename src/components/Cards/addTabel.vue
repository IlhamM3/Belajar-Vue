<script>
import { defineStore } from 'pinia';

export const StoreTodo = defineStore('todo', {
    state: () => ({
        listtodo: []
    }),
    getters: {
        todolist: (state) => state.listtodo
    },
    actions: {
        tambahtodo(data) {
            try {
                this.listtodo.push({
                    ...data,
                    done: false
                });
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        DeleteTodo(index) {
            try {
                if (index > -1) {
                    this.listtodo.splice(index, 1);
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        },
        DoneTodo(index) {
            try {
                // Ubah status todo
                this.listtodo[index].done = !this.listtodo[index].done;

                // Dapatkan elemen tombol dan status yang berkaitan dengan item todo yang sesuai
                const buttonDone = document.querySelector(`.buttondone${index}`);
                const statusdone = document.querySelector(`.statusdone${index}`);

                // Periksa dan ubah tampilan berdasarkan status todo yang baru
                if (this.listtodo[index].done) {
                    buttonDone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square-fill" viewBox="0 0 16 16"><path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/></svg>';
                    statusdone.textContent = 'Selesai';
                } else {
                    buttonDone.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-square" viewBox="0 0 16 16"> <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/></svg>';
                    statusdone.textContent = 'Pending';
                }
            } catch (error) {
                console.log(error);
                throw error;
            }
        },

        todoEdit(input, index) {
            try {
                this.list[index] = input
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
    }
});
</script>
