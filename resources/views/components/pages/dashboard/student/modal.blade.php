@props(['type', 'buttonLabel', 'title', 'show' => false])
@php
    $method = 'store';
    if ($type == 'edit') {
        $method = 'update';
    }
@endphp
<x-modal
    name="{{ $type }}-modal"
    :show="$show"
    maxWidth="7xl"
    focusable
>

    <form
        class="p-6 relative"
        method="post"
        action="{{ route('student.store') }}"
        autocomplete="off"
        x-data="{{ $type }}StudentModal($el)"
        x-init="{{ $type }}StudentModalInit;
        $watch('show', (value) => {
            {{ $type }}StudentModalChangeHandler(value)
        })"
    >
        @csrf

        <div
        class="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        x-cloak
        x-show="loading === true"
    >
        <div role="status">
            <svg
                class="mr-2 inline h-12 w-12 animate-spin fill-gray-600 text-gray-200 dark:fill-gray-300 dark:text-gray-600"
                aria-hidden="true"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                />
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                />
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
    </div>

        <div class="relative flex items-center justify-between">
            <h2 class="text-lg font-medium text-background-900 dark:text-background-100">
                {{ __($title) }}
            </h2>
            <div class="flex justify-end">
                <button
                    class="-mx-1.5 -my-1.5 mb-auto ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-background-50 p-1.5 text-background-500 hover:bg-background-200 focus:ring-2 focus:ring-background-400 dark:bg-background-900 dark:text-background-400 dark:hover:bg-background-950"
                    type="button"
                    aria-label="Close"
                    x-on:click="$dispatch('close')"
                >
                    <span class="sr-only">Close</span>
                    <svg
                        class="h-3 w-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                    </svg>
                </button>
            </div>
        </div>

        <div
            class="mb-4 flex items-center rounded-lg bg-red-50 p-4 text-red-800 dark:bg-background-900 dark:text-red-400"
            role="alert"
            x-show="errors"
        >

            <svg
                class="mb-auto mr-2 mt-1 h-4 w-4 flex-shrink-0"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
            >
                <path
                    d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
            </svg>
            <span class="sr-only">Info</span>
            <div>
                <span
                    class="font-medium"
                    x-text="errors?.message"
                ></span>
                <ul class="ml-4 mt-1.5 list-inside list-disc">
                    <template
                        x-for="(error, index) in errors?.errors"
                        :key="index"
                    >
                        <li x-text="error"></li>
                    </template>
                </ul>
            </div>

            <button
                class="-mx-1.5 -my-1.5 mb-auto ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 p-1.5 text-red-500 hover:bg-red-200 focus:ring-2 focus:ring-red-400 dark:bg-background-800 dark:text-red-400 dark:hover:bg-background-700"
                data-dismiss-target="#alert-2"
                type="button"
                aria-label="Close"
            >
                <span class="sr-only">Close</span>
                <svg
                    class="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                </svg>
            </button>
        </div>

        <div class="grid gap-3 md:grid-cols-2">
            <div class="flex flex-col gap-2">
                <x-pages.dashboard.student.input
                    name="name"
                    label="Nama"
                    x-model="body.name"
                    {{-- ::error="$this->errors.errors['name']" --}}
                />
                <x-pages.dashboard.student.input
                    name="email"
                    label="Email"
                    type="email"
                    x-model="body.email"
                    autocomplete="new-email"
                />

                <div>
                    <x-label
                        for="password"
                        value="{{ __('Password') }}"
                    />

                    <x-input-password
                        class="w-full"
                        name="password"
                        placeholder="{{ __('Password') }}"
                        x-model="body.password"
                        autocomplete="new-password"
                    />

                    <x-input-error
                        class="mt-2"
                        :messages="'errors'"
                        for="password"
                    />
                </div>
            </div>
            <div></div>

            <div class="flex flex-col gap-2">
                <x-pages.dashboard.student.input
                    name="date_of_birth"
                    label="Tanggal lahir"
                    type="date"
                    x-model="body.date_of_birth"
                />
                <x-pages.dashboard.student.input
                    name="address"
                    label="Alamat"
                    x-model="body.address"
                />
                <x-pages.dashboard.student.input
                    name="phone_number"
                    label="Nomor telepon"
                    x-model="body.phone_number"
                />
                <x-pages.dashboard.student.input
                    name="guardian_name"
                    label="Nama wali"
                    x-model="body.guardian_name"
                />
                <x-pages.dashboard.student.input
                    name="guardian_phone_number"
                    label="Nomor telepon wali"
                    x-model="body.guardian_phone_number"
                />


                <div>
                    <x-label
                        for="gender"
                        value="{{ __('Jenis kelamin') }}"
                    />
                    <x-select
                        name="gender"
                        x-model="body.gender"
                    >
                        <option hidden>Pilih jenis kelamin</option>
                        <option value="male">Laki Laki</option>
                        <option value="female">Perempuan</option>
                        <option value="other">Kosong</option>
                    </x-select>
                </div>


                <div>
                    <x-label
                        for="blood_type"
                        value="{{ __('Tipe darah') }}"
                    />
                    <x-select
                        name="blood_type"
                        x-model="body.blood_type"
                    >
                        <option hidden>Golongan Darah</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                    </x-select>
                </div>

            </div>

            <div class="flex flex-col gap-2">
                <div>
                    <x-label
                        for="faculty_id"
                        value="{{ __('Fakultas') }}"
                    />
                    <x-select
                        name="faculty_id"
                        x-init="fetchFaculties('{{ route('faculty.index') }}')"
                        x-on:change="(event) => {facultyChangeHandler(event.target.value)}"
                        x-model="body.faculty_id"
                    >
                        <option hidden>Pilih Fakultas</option>
                        <template x-for="faculty in faculties">
                            <option
                                :value="faculty.id"
                                x-text="faculty.name"
                            ></option>
                        </template>
                    </x-select>
                </div>

                <div>
                    <x-label
                        for="major_id"
                        value="{{ __('Jurusan') }}"
                    />
                    <x-select
                        name="major_id"
                        x-model="body.major_id"
                        x-init="fetchMajors('{{ route('major.index') }}')"
                    >
                        <option hidden>Pilih Jurusan</option>
                        <template x-for="major in _majors">
                            <option
                                :value="major.id"
                                x-text="major.name"
                            ></option>
                        </template>
                    </x-select>
                </div>


                <x-pages.dashboard.student.input
                    name="student_id"
                    label="NPM"
                    x-model="body.student_id"
                />

                <x-pages.dashboard.student.input
                    name="current_credits"
                    label="SKS"
                    x-model="body.current_credits"
                    type="number"
                    value="0"
                />
                <x-pages.dashboard.student.input
                    name="admission_year"
                    label="Angkatan"
                    x-model="body.admission_year"
                    type="number"
                    min="1945"
                    max="{{ now()->year }}"
                    value="{{ now()->year }}"
                />

                <div>
                    <label
                        class="block text-sm font-medium text-background-700 dark:text-background-300"
                        for="tuition_fee"
                    >Sumbangan Pembinaan Pendidikan (SPP)</label>
                    <div class="relative">
                        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span class="sm:text-sm">Rp</span>
                        </div>
                        <input
                            class="w-full rounded-md border-background-300 pl-8 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:border-background-700 dark:bg-background-900 dark:focus:border-indigo-600 dark:focus:ring-indigo-600"
                            type="number"
                            name="tuition_fee"
                            placeholder="0.00"
                            min="50000"
                            x-model="body.tuition_fee"
                        >
                    </div>
                </div>

                <div>
                    <x-label
                        for="status"
                        value="{{ __('Status') }}"
                    />
                    <x-select
                        name="status"
                        x-model="body.status"
                    >
                        <option hidden>Status</option>
                        @foreach (StudentStatus::values() as $item)
                            <option
                                class="uppercase"
                                value="{{ $item }}"
                            >{{ Str::upper($item) }}</option>
                        @endforeach
                    </x-select>
                </div>


            </div>
        </div>

        <div class="mt-6 flex justify-end">
            <x-secondary-button x-on:click="$dispatch('close')">
                {{ __('Cancel') }}
            </x-secondary-button>

            <x-primary-button
                class="ml-3"
                x-on:click="{{ $method }}StudentHandler"
            >
                {{ __($buttonLabel) }}
            </x-primary-button>
        </div>
    </form>
</x-modal>
