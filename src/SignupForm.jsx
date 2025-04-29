import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function SignupForm() {
	const validate = (values) => {
		const errors = {}
		if (!values.username) {
			errors.username = 'Required'
		} else if (values.username.length > 15) {
			errors.username = 'Must be 15 characters or less'
		}
		if (!values.email) {
			errors.email = 'Required'
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address'
		}
		return errors
	}

	const formObject = useFormik({
		initialValues: { username: '', email: '' },
		validate,
		onSubmit: (formValue) => console.log(formValue),
	})

	//
	return (
		<div className='min-h-screen flex items-center justify-center bg-gray-100'>
			<form
				className='bg-white p-8 rounded-2xl shadow-md w-full max-w-md'
				onSubmit={formObject.handleSubmit}>
				<h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>

				{/* Username */}
				<div className='mb-4'>
					<label
						htmlFor='username'
						className='block text-gray-700 font-semibold mb-1'>
						Username
					</label>
					<input
						id='username'
						name='username'
						type='text'
						className='w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
						value={formObject.values.username}
						onChange={formObject.handleChange}
						onBlur={formObject.handleBlur}
					/>
					{formObject.touched.username && formObject.errors.username ? (
						<div className='text-sm font-semibold text-red-400 py-1 mb-1'>
							{formObject.errors.username}
						</div>
					) : null}
				</div>

				{/* Email */}
				<div className='mb-4'>
					<label
						htmlFor='email'
						className='block text-gray-700 font-semibold mb-1'>
						Email
					</label>
					<input
						id='email'
						name='email'
						type='email'
						className='w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
						value={formObject.values.email}
						onChange={formObject.handleChange}
						onBlur={formObject.handleBlur}
					/>
					{formObject.touched.email && formObject.errors.email ? (
						<div className='text-sm font-semibold text-red-500 py-1 mb-1'>
							{formObject.errors.email}
						</div>
					) : null}
				</div>

				{/* Gender */}
				{/* <div className='mb-6'>
					<label className='block text-gray-700 font-semibold mb-1'>
						Gender
					</label>
					<div className='flex items-center space-x-4'>
						<label className='inline-flex items-center'>
							<input
								type='radio'
								name='gender'
								value='male'
								className='form-radio text-blue-500'
							/>
							<span className='ml-2'>Male</span>
						</label>
						<label className='inline-flex items-center'>
							<input
								type='radio'
								name='gender'
								value='female'
								className='form-radio text-pink-500'
							/>
							<span className='ml-2'>Female</span>
						</label>
						<label className='inline-flex items-center'>
							<input
								type='radio'
								name='gender'
								value='other'
								className='form-radio text-gray-500'
							/>
							<span className='ml-2'>Other</span>
						</label>
					</div>
				</div> */}

				{/* Submit Button */}
				<button
					type='submit'
					className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition duration-300'>
					Register
				</button>
			</form>
		</div>
	)
}
