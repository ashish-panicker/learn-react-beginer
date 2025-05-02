import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
	inquiryType: Yup.string().required('Inquiry type is required'),
	fullName: Yup.string()
		.min(3, 'Full Name must be at least 3 characters')
		.required('Full Name is required'),
	location: Yup.string().required('Location is required'),
	contactMethod: Yup.string().required('Preferred contact method is required'),
	email: Yup.string()
		.email('Invalid email address')
		.when('contactMethod', {
			is: 'email',
			then: () => Yup.string().required('Email is required'),
		}),
	phone: Yup.string()
		.matches(/^\d{10,15}$/, 'Phone must be 10-15 digits')
		.when('contactMethod', {
			is: 'phone',
			then: () => Yup.string().required('Phone is required'),
		}),
	preferredDate: Yup.date()
		.min(
			new Date().toISOString().split('T')[0],
			'Date must be today or in the future'
		)
		.required('Preferred date is required'),
	carModel: Yup.string().required('Car model is required'),
})

export default function CarInquiryForm() {
	const formik = useFormik({
		initialValues: {
			inquiryType: '',
			fullName: '',
			email: '',
			phone: '',
			contactMethod: '',
			preferredDate: '',
			preferredTime: '',
			carModel: '',
			budget: '',
			location: '',
			message: '',
			referralSource: '',
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			console.log('Submitted:', values)
			alert('Inquiry submitted successfully!')
			resetForm()
		},
	})

	const { values, handleChange, handleSubmit, errors, touched, handleBlur } =
		formik

	return (
		<div className='max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10'>
			<h2 className='text-2xl font-bold mb-6'>Car Inquiry Form</h2>
			<form
				onSubmit={handleSubmit}
				className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{/* Inquiry Type */}
				<div className='md:col-span-2'>
					<label className='block font-semibold mb-1'>Inquiry Type *</label>
					<div className='flex gap-4'>
						<label>
							<input
								type='radio'
								name='inquiryType'
								value='new'
								onChange={handleChange}
								checked={values.inquiryType === 'new'}
							/>{' '}
							New
						</label>
						<label>
							<input
								type='radio'
								name='inquiryType'
								value='used'
								onChange={handleChange}
								checked={values.inquiryType === 'used'}
							/>{' '}
							Used
						</label>
					</div>
					{touched.inquiryType && errors.inquiryType && (
						<p className='text-red-500 text-sm'>{errors.inquiryType}</p>
					)}
				</div>

				{/* Car Interest */}
				<div>
					<label className='block font-semibold mb-1'>Car Make & Model *</label>
					<input
						type='text'
						name='carModel'
						className='w-full border rounded p-2'
						value={values.carModel}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.carModel && errors.carModel && (
						<p className='text-red-500 text-sm'>{errors.carModel}</p>
					)}
				</div>

				<div>
					<label className='block font-semibold mb-1'>Budget Range</label>
					<select
						name='budget'
						className='w-full border rounded p-2'
						value={values.budget}
						onChange={handleChange}>
						<option value=''>Select</option>
						<option value='<5L'>Below ₹5L</option>
						<option value='5-10L'>₹5L–₹10L</option>
						<option value='10-20L'>₹10L–₹20L</option>
						<option value='>20L'>Above ₹20L</option>
					</select>
				</div>

				{/* Personal Info */}
				<div>
					<label className='block font-semibold mb-1'>Full Name *</label>
					<input
						type='text'
						name='fullName'
						className='w-full border rounded p-2'
						value={values.fullName}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.fullName && errors.fullName && (
						<p className='text-red-500 text-sm'>{errors.fullName}</p>
					)}
				</div>

				<div>
					<label className='block font-semibold mb-1'>Location *</label>
					<input
						type='text'
						name='location'
						className='w-full border rounded p-2'
						value={values.location}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.location && errors.location && (
						<p className='text-red-500 text-sm'>{errors.location}</p>
					)}
				</div>

				{/* Contact Method */}
				<div className='md:col-span-2'>
					<label className='block font-semibold mb-1'>
						Preferred Contact Method *
					</label>
					<div className='flex gap-4'>
						<label>
							<input
								type='radio'
								name='contactMethod'
								value='email'
								onChange={handleChange}
								checked={values.contactMethod === 'email'}
							/>{' '}
							Email
						</label>
						<label>
							<input
								type='radio'
								name='contactMethod'
								value='phone'
								onChange={handleChange}
								checked={values.contactMethod === 'phone'}
							/>{' '}
							Phone
						</label>
					</div>
					{touched.contactMethod && errors.contactMethod && (
						<p className='text-red-500 text-sm'>{errors.contactMethod}</p>
					)}
				</div>

				{values.contactMethod === 'email' && (
					<div>
						<label className='block font-semibold mb-1'>Email Address *</label>
						<input
							type='email'
							name='email'
							className='w-full border rounded p-2'
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.email && errors.email && (
							<p className='text-red-500 text-sm'>{errors.email}</p>
						)}
					</div>
				)}

				{values.contactMethod === 'phone' && (
					<div>
						<label className='block font-semibold mb-1'>Phone Number *</label>
						<input
							type='tel'
							name='phone'
							className='w-full border rounded p-2'
							value={values.phone}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{touched.phone && errors.phone && (
							<p className='text-red-500 text-sm'>{errors.phone}</p>
						)}
					</div>
				)}

				<div>
					<label className='block font-semibold mb-1'>
						Preferred Contact Date *
					</label>
					<input
						type='date'
						name='preferredDate'
						className='w-full border rounded p-2'
						value={values.preferredDate}
						onChange={handleChange}
						onBlur={handleBlur}
					/>
					{touched.preferredDate && errors.preferredDate && (
						<p className='text-red-500 text-sm'>{errors.preferredDate}</p>
					)}
				</div>

				<div>
					<label className='block font-semibold mb-1'>
						Preferred Contact Time
					</label>
					<input
						type='time'
						name='preferredTime'
						className='w-full border rounded p-2'
						value={values.preferredTime}
						onChange={handleChange}
					/>
				</div>

				{/* Additional */}
				<div className='md:col-span-2'>
					<label className='block font-semibold mb-1'>
						Message or Questions
					</label>
					<textarea
						name='message'
						className='w-full border rounded p-2'
						rows='4'
						value={values.message}
						onChange={handleChange}></textarea>
				</div>

				<div className='md:col-span-2'>
					<label className='block font-semibold mb-1'>
						How did you hear about us?
					</label>
					<select
						name='referralSource'
						className='w-full border rounded p-2'
						value={values.referralSource}
						onChange={handleChange}>
						<option value=''>Select</option>
						<option value='website'>Website</option>
						<option value='friend'>Friend</option>
						<option value='social'>Social Media</option>
						<option value='other'>Other</option>
					</select>
				</div>

				{/* Submit */}
				<div className='md:col-span-2 pt-4'>
					<button
						type='submit'
						className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
						Submit
					</button>
					<button
						type='button'
						className='ml-4 text-gray-700'
						onClick={formik.handleReset}>
						Reset
					</button>
				</div>
			</form>
		</div>
	)
}
