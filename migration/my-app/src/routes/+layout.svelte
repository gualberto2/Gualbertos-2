<script>
	import '../app.css';
	import * as Sheet from "$lib/components/ui/sheet";
	import { cn } from '$lib/utils';
	
	const routes = [
		{ href: '/', label: 'Home', active: pathname === '/' },
		{ href: '/menu', label: 'Menu', active: pathname === '/menu' },
		{ href: '/delivery', label: 'Delivery', active: pathname === '/delivery' },
		{
			href: '/contact',
			label: 'Contact',
			active: pathname === '/contact'
		},
		{
			href: 'https://food.google.com/chooseprovider?restaurantId=/g/1tfm6z14&g2lbs=ANTchaMpSH41hd2FOcGGPQWAT02MnF0CoeDtVHNHA0cDEELgkkopsL9-83bq6Tsmtht8HXCbqkJ-ZAl2UKZqPkjdJbfuYyMn6du2vwVVBy8nMal3OxQK16hTFH14fRHCnYwj0fkpYPRD5LzlzG77G5kxH1iFgsnCHA%3D%3D&hl=en-US&gl=us&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&gei=qHx4ZbXKBIH4kPIPqrCVmAI&ei=qHx4ZbXKBIH4kPIPqrCVmAI&fo_s=OA&opi=89978449&sei=CVEf821a8GuyEa1C5IlnHWcx&utm_campaign&utm_source=search',
			label: 'Order Online',
			active: pathname === '/order'
		}
	];
</script>

<div class="sticky top-0 bg-white border-b">
	<div class="grid h-16 grid-cols-2 px-4 md:grid-cols-8">
		<h1
			class="flex items-center col-span-1 text-3xl font-bold text-green-600 whitespace-nowrap md:col-start-2"
		>
			Gualbertos 2
		</h1>
		<div class="justify-end col-start-2 pr-8 mx-6 align-center justify-self-end" />
		<nav class="flex items-center col-start-4 md:col-start-4 lg:col-start-5 flex-nowrap whitespace-nowrap">
			<div
			  class="items-center hidden space-x-4 lg:space-x-6 md:flex ",


			>
			  {routes.map((route) => (
				<a
				  key={route.href}
				  href={route.href}
				  class={cn(
					"text-md font-medium transition-colors hover:text-primary",
					route.active
					  ? "text-black, dark:text-white font-bold"
					  : "text-muted-foreground",
					route.label === "Order Online" &&
					  "text-green-800 font-bold px-4 py-2 border border-green-800 hover:text-white hover:bg-green-800 rounded-lg"
				  )}
				>
				  {route.label}
				</Link>
			  ))}
			</div>
			<div class={cn("block space-x-4 lg:space-x-6 md:hidden", class)}>
			  <Sheet.Root>
				<Sheet.Trigger>
				  <RxHamburgerMenu class="self-end text-xl justify-self-end" />
				</Sheet.Trigger>
				<Sheet.Content>
				  <Sheet.Header>
					{#each}
					<a
					key={route.href}
					href={route.href}
					class={cn(
					  "text-lg font-medium transition-colors hover:text-primary ",
					  route.active
						? "text-black, dark:text-white border-l border-red-300 bg-opacity-20 bg-gray-300 "
						: "text-muted-foreground"
					)}
				  >
					{route.label}
					</a>
					{/each}
					{routes.map((route) => (
					 
					))}
					<Sheet.Description></Sheet.Description>
				  </Sheet.Header>
				</Sheet.Content>
			  </Sheet.Root>
			</div>
		  </nav>
		  </div>
	</div>
</div>

<slot></slot>
